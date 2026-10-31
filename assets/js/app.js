'use strict';
(() => {
  const cfg = window.SULPETS_CONFIG || { whatsapp: '5551986133553' };
  const urlBase = `https://wa.me/${String(cfg.whatsapp).replace(/\D/g, '')}`;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-whatsapp]').forEach(el => el.setAttribute('href', urlBase));
  if (cfg.instagram) document.querySelectorAll('[data-instagram]').forEach(el => el.setAttribute('href', cfg.instagram));
  document.querySelector('#year').textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('#navToggle');
  const nav = document.querySelector('#navMenu');
  const closeNav = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('nav--open');
    nav.classList.toggle('nav--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape') closeNav(); });
  document.addEventListener('click', ev => {
    if (!nav.contains(ev.target) && !toggle.contains(ev.target)) closeNav();
  });

  const form = document.querySelector('#petForm');
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    if (!form.reportValidity()) return;
    const val = id => document.getElementById(id).value.trim();
    const nomePet = val('nomePet');
    const tutor = val('nomeTutor');
    const contato = val('contatoTutor');
    const servico = val('tipoServico');
    const observacoes = val('observacoes');
    const texto = [
      `🐾 *NOVO CONTATO — ${cfg.nomeClinica || 'Espaço Sul Pets'}*`,
      '',
      `🐶 *Nome do pet:* ${nomePet}`,
      `👤 *Nome do tutor:* ${tutor}`,
      `📱 *Contato:* ${contato}`,
      `💜 *Serviço desejado:* ${servico}`,
      `📝 *Observações:* ${observacoes || 'Nenhuma observação.'}`,
      '',
      'Olá! Gostaria de saber mais e verificar a disponibilidade de atendimento. Obrigado(a)!'
    ].join('\n');
    // Mesma aba: mais estável no Safari (iOS), sem bloqueio de pop-ups.
    window.location.href = `${urlBase}?text=${encodeURIComponent(texto)}`;
  });

  const preloader = document.getElementById('preloader');
  let hidden = false;
  function hidePreloader() {
    if (hidden) return;
    hidden = true;
    preloader.classList.add('preloader--hidden');
    window.setTimeout(() => preloader.remove(), 420);
  }
  let seen = false;
  try { seen = sessionStorage.getItem('sulpets_preloaded') === '1'; } catch (_) {}
  if (prefersReducedMotion || seen) {
    hidePreloader();
  } else {
    window.addEventListener('load', () => {
      window.setTimeout(() => {
        hidePreloader();
        try { sessionStorage.setItem('sulpets_preloaded', '1'); } catch (_) {}
      }, 1450);
    }, { once: true });
    window.setTimeout(hidePreloader, 3600);
  }
})();
