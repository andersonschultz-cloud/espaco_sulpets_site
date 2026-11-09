'use strict';
const fs = require('fs');
const vm = require('vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const base = path.resolve(__dirname, '..', 'assets', 'js') + path.sep;
const configJs = fs.readFileSync(base + 'config.js','utf8');
const appJs = fs.readFileSync(base + 'app.js','utf8');
function harness(seen='1') {
  class ClassList {
    constructor(){this.vals=new Set()}
    add(s){this.vals.add(s)}
    remove(s){this.vals.delete(s)}
    toggle(s,on){let value=typeof on==='boolean'?on:!this.vals.has(s);if(value)this.add(s);else this.remove(s);return value}
    contains(s){return this.vals.has(s)}
  }
  class Element {
    constructor(name){this.name=name;this.listeners={};this.classList=new ClassList();this.attrs={};this.value='';this.textContent='';this.removed=false;this.validity='';this.innerItems=[]}
    addEventListener(evt,callback){(this.listeners[evt] ||= []).push(callback)}
    trigger(evt,e={}){for(const cb of this.listeners[evt]||[])cb(e)}
    setAttribute(key,val){this.attrs[key]=val}
    getAttribute(key){return this.attrs[key]}
    contains(target){return target===this}
    querySelectorAll(){return this.innerItems}
    setCustomValidity(value){this.validity=value}
    reportValidity(){return !this.validity}
    remove(){this.removed=true}
  }
  const ids=['#year','#navToggle','#navMenu','#petForm','#preloader','#nomePet','#nomeTutor','#contatoTutor','#tipoServico','#observacoes'];
  const elements=Object.fromEntries(ids.map(id=>[id,new Element(id)]));
  const links=Array.from({length:5},(_,i)=>new Element('wa'+i));
  const instagram=[new Element('insta')];
  elements['#navMenu'].innerItems=[new Element('navAnchor')];
  const documentListeners={};
  const document={
    readyState:'loading',
    getElementById(id){return elements['#'+id]},
    querySelector(q){return elements[q]},
    querySelectorAll(q){return q==='[data-whatsapp]'?links : q==='[data-instagram]'?instagram : []},
    addEventListener(evt,cb){(documentListeners[evt] ||= []).push(cb)}
  };
  const windowListeners={};
  const timerCallbacks=[];
  const window={
    matchMedia(){return {matches:false}},
    location:{href:''},
    addEventListener(evt,cb){(windowListeners[evt] ||= []).push(cb)},
    setTimeout(cb,delay){timerCallbacks.push({cb,delay})}
  };
  const sessionStorage={getItem(){return seen},setItem(){}};
  const ctx={window,document,sessionStorage,console,Date,encodeURIComponent,decodeURIComponent};
  vm.createContext(ctx);
  vm.runInContext(configJs,ctx,{filename:'config.js'});
  vm.runInContext(appJs,ctx,{filename:'app.js'});
  const form=elements['#petForm'];
  form.reportValidity=function(){
    for(const id of ['#nomePet','#nomeTutor','#contatoTutor','#tipoServico'])if(!elements[id].value.trim())return false;
    return !elements['#contatoTutor'].validity;
  };
  function submit(){form.trigger('submit',{preventDefault(){}})}
  return {elements,links,window,document,submit,timerCallbacks,windowListeners,documentListeners};
}
let h=harness();
assert.equal(h.links.length,5);
assert.ok(h.links.every(e=>e.getAttribute('href')==='https://wa.me/5551993049408'));
assert.equal(h.elements['#year'].textContent,String(new Date().getFullYear()));
assert.equal(h.elements['#preloader'].classList.contains('preloader--hidden'),true,'seen session skips intro');
h.elements['#navToggle'].trigger('click');
assert.ok(h.elements['#navMenu'].classList.contains('nav--open'));
h.documentListeners.keydown[0]({key:'Escape'});
assert.ok(!h.elements['#navMenu'].classList.contains('nav--open'));
h.submit();
assert.equal(h.window.location.href,'','blank form blocked');
h.elements['#nomePet'].value='Mel';
h.elements['#nomeTutor'].value='Patrícia Teste';
h.elements['#contatoTutor'].value='abc';
h.elements['#tipoServico'].value='Saúde Veterinária';
h.submit();
assert.equal(h.window.location.href,'','invalid phone blocked');
assert.equal(h.elements['#contatoTutor'].validity,'Informe um telefone válido com DDD.');
h.elements['#contatoTutor'].value='(51) 99999-1234';
h.elements['#contatoTutor'].trigger('input');
h.elements['#observacoes'].value='Consulta anual e revisão';
h.submit();
const newUrl=new URL(h.window.location.href);
assert.equal(newUrl.hostname,'wa.me');
assert.equal(newUrl.pathname,'/5551993049408');
const msg=newUrl.searchParams.get('text');
for(const text of ['Mel','Patrícia Teste','(51) 99999-1234','Saúde Veterinária','Consulta anual e revisão']) assert.ok(msg.includes(text),text);
const slow=harness('0');
assert.equal(slow.elements['#preloader'].removed,false);
slow.document.readyState='complete';
slow.windowListeners.load[0]();
assert.ok(slow.timerCallbacks.some(t=>t.delay===1450));
slow.timerCallbacks.find(t=>t.delay===1450).cb();
assert.equal(slow.elements['#preloader'].classList.contains('preloader--hidden'),true);
slow.timerCallbacks.find(t=>t.delay===420).cb();
assert.equal(slow.elements['#preloader'].removed,true);
const summary={links:5,new_number:true,menu:true,empty_form_blocked:true,invalid_phone_blocked:true,form_message_encoded:true,preloader_hides:true,no_JS_exceptions:true};
console.log('PASS:',JSON.stringify(summary));
