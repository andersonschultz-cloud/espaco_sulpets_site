# Espaço Sul Pets — Site Premium V8 (GitHub Pages)

Site estático, responsivo, sem build nem backend. **O arquivo `index.html` está na raiz do ZIP** para publicação direta no GitHub Pages.

## Atualizações da V7

- Nova seção **Cuidado para toda a vida**, com faixa ilustrativa de cães de diferentes idades e quatro etapas: filhotes, jovens, adultos e sêniores.
- Fotos fornecidas pelo proprietário, organizadas em cartões para recreação, banho, movimento e terapias, com WebP otimizado e proporções responsivas.
- Nova seção **Venha nos conhecer**, com imagem da fachada do Espaço Sul Pets.
- Endereço completo, CNPJ e botão para buscar a localização no Google Maps, além de WhatsApp.
- Dados estruturados `VeterinaryCare` (JSON-LD) com localização e identificação empresarial.
- Preservados serviços, fundador, Missão/Visão/Valores, cadastro com WhatsApp e animação de abertura.

## Publicar

1. Extraia o arquivo ZIP.
2. Faça upload dos arquivos e pastas **diretamente na raiz do repositório** (não envie tudo dentro de outra pasta).
3. Em `Settings → Pages`, selecione `Deploy from a branch` → `main` → `/(root)`.
4. Salve e acesse a URL fornecida pelo GitHub Pages.

## Contato cadastrado

- **WhatsApp**: +55 51 99304-9408
- **Endereço**: Avenida Farroupilha, 4314, Casa, Marechal Rondon, Canoas / RS, CEP 92020-476
- **CNPJ**: 69.548.473/0001-24

## Manutenção

- Textos e seções: `index.html`.
- Estilos e responsividade: `assets/css/style.css`.
- WhatsApp e Instagram: `assets/js/config.js`.
- Comportamento do menu e formulário: `assets/js/app.js`.
- Imagens: `assets/images/`.

**Importante:** o cadastro não envia mensagens automaticamente nem armazena informações; ele abre o WhatsApp com texto pré-preenchido para o usuário confirmar o envio. O site não tem sistema de agenda ou armazenamento de dados.

Consulte `PUBLICAR_NO_GITHUB.md`, `MANUTENCAO.md` e `TESTES.md` para detalhes.


## Atualização V8 (09/11/2026)

- O cachorro da tela de carregamento agora olha para a direita enquanto atravessa a página da esquerda para a direita.
- Número oficial do WhatsApp atualizado para **(51) 99304-9408** (link `https://wa.me/5551993049408`) no site, configuração e metadados.
- Links e recursos estáticos revisados; testes da V8 documentados em `TESTES.md`.

## Verificação opcional após editar

Se você tiver Node.js instalado, execute `node tests/smoke.cjs` na raiz da pasta do site. O teste não envia mensagens reais: simula o menu, a validação do formulário, o contato e o encerramento do loading.
