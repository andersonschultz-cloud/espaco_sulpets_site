# Manual rápido de manutenção do site

Tudo está separado em HTML + CSS + JavaScript, sem framework ou compilação.

## Alterar o número do WhatsApp

1. Abra `assets/js/config.js`.
2. Substitua o valor de `whatsapp`, mantendo **somente dígitos**, incluindo `55` (Brasil) e `51` (DDD).
3. No arquivo `index.html`, atualize o número de telefone **escrito na página** e o fallback dos links `https://wa.me/...`, para que os links funcionem mesmo sem JavaScript.

## Editar o Instagram

Altere `instagram` em `assets/js/config.js` e a identificação visível no rodapé de `index.html`.

## Mudar textos da página

Abra `index.html` em um editor como VS Code. Procure por trechos conhecidos (por exemplo, `Cadastre seu Pet`, `Dr. Geovanni Guedes` ou `Missão, Visão e Valores`). Edite apenas o texto entre as tags HTML.

## Atualizar os serviços do formulário

As opções ficam dentro de `<select id="tipoServico">` em `index.html`. Adicione, remova ou renomeie as linhas `<option>Nome do serviço</option>`.

## Alterar cores, fontes e medidas

No topo de `assets/css/style.css`, procure o bloco `:root`. As principais cores são:

| Variável | Uso |
|---|---|
| `--purple` | Roxo principal |
| `--purple-deep` | Roxo escuro |
| `--violet` | Roxo de destaque |
| `--lavender` | Lavanda |
| `--ink` | Cor dos títulos |
| `--max` | Largura máxima do conteúdo |

O site utiliza **Nunito Sans** nos títulos e **DM Sans** no corpo, com fontes alternativas do sistema se estiver offline.

## Trocar imagens

As imagens estão em `assets/images/`, principalmente em formato WebP. Você pode substituir uma imagem por outra **mantendo o mesmo nome** (recomendação mais simples), ou alterar os caminhos `src="assets/images/..."` no `index.html`.

- `hero-doctor-pets.webp`: arte principal da capa, com Dr. Geovanni e pets.
- `spitz-hero.webp`: foto circular do Spitz Alemão na capa.
- `logo.webp`: marca da clínica.
- `servico-*.webp`: fotos dos sete serviços.
- `missao-golden-v6.webp`: golden retriever da seção de valores.
- `cadastro-bulldog-v6.webp`: cachorro ao lado do cadastro.
- `diferencial-pets-v6.webp`: cão e gato na seção Nosso Diferencial.
- `fachada-espaco-sulpets.webp`: fotografia externa do estabelecimento.
- `favicon.png`: ícone do navegador.

Para evitar cortes indesejados, use fotos com um assunto centralizado. Recomendação: WebP de boa qualidade, em torno de 600–1200 pixels de largura.

## Ajustar o movimento do cachorrinho

A animação está no arquivo `assets/css/style.css`, nas regras `.running-dog`, `@keyframes dog-run` e `.preloader`. A duração da primeira exibição é controlada por `assets/js/app.js`.

A animação é mostrada uma vez por aba e é desativada quando o usuário pede menos movimento nas configurações do dispositivo.

## Formulário e privacidade

O site **não armazena dados**, não possui painel administrativo e não salva cadastros em planilhas. Ele apenas abre o WhatsApp com uma mensagem pré-preenchida. O usuário precisa clicar em **Enviar** dentro do WhatsApp. Esse é o funcionamento adequado para um site estático no GitHub Pages.

## SEO e compartilhamento

Atualize o título, a descrição e as tags `og:*` no `<head>` de `index.html`. Quando a URL definitiva for conhecida, ajuste `og:image` para a URL **absoluta** da imagem `assets/images/compartilhar.webp`.

## Alterações de maior porte

Use um editor de código e teste primeiro no navegador local. Suba os arquivos ao GitHub apenas após verificar a página, de preferência no computador e em um celular.

## V4 — fotos dos pets

As fotos de serviços ficam em `assets/images/servico-*.webp` (900 × 900). Para não cortar o rosto, use retratos quadrados com o pet centralizado; a exibição usa `object-fit: cover`. As imagens são digitalmente geradas e podem ser trocadas por fotos reais com autorização.


## V7 — Localização, CNPJ e ciclo de vida

- **Localização**: edite a seção `id="localizacao"` em `index.html` e o endereço do rodapé.
- **CNPJ**: altere também o bloco `<script type="application/ld+json">` do HTML, que contém dados estruturados para mecanismos de busca.
- **Botão de mapa**: atualize a URL do Google Maps na seção localização ao mudar o endereço.
- **Novas imagens**: os arquivos `fachada-espaco-sulpets.webp`, `vida-ciclo-banner.webp`, `vida-ciclo-mobile.webp`, `vida-filhotes.webp`, `vida-rotina.webp`, `vida-movimento.webp` e `vida-maturidade.webp` ficam em `assets/images/`.
- **Proporções**: a fachada conserva formato vertical, e os cartões de vida usam 3:2. No mobile o banner mostra um recorte fotográfico próprio e o texto da mensagem aparece em HTML.
- **Cuidados clínicos**: textos institucionais não substituem uma avaliação veterinária.

As fotografias e imagens de divulgação são arquivos fornecidos pelo solicitante ou produzidos para a campanha; verifique direitos de uso e adequação da representação do estabelecimento antes da publicação.


### Direção do cachorro na tela de carregamento

A regra `.running-dog__body` espelha horizontalmente apenas o emoji, para ele olhar para a direita. O `@keyframes dog-run` desloca o contêiner da esquerda para a direita continuamente durante o carregamento. **Não remova o `scaleX(-1)`** ao modificar a animação. O script mantém um tempo-limite de segurança para não travar a página.
