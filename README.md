# Espaço Sul Pets — Site Premium V6

Versão completa e atualizada, preparada para o **GitHub Pages** e sem backend, build, Node.js ou instalação de dependências.

## Novidades da V4

- Todas as 7 fotos dos serviços foram substituídas por imagens realistas e nítidas (WebP 900 × 900), ajustadas à proporção dos cartões.
- Spitz Alemão em destaque com nova imagem nítida.
- Imagem de missão, bem-estar e formulário atualizadas.
- Imagem compartilhada em redes sociais atualizada.
- Identidade roxa preservada, layout responsivo, animação de cachorrinho ao abrir o site.
- Cadastro com redirecionamento para o WhatsApp (51) 98613-3553, com informações do pet, tutor, contato, serviço e observações.

## Como publicar

1. Extraia o ZIP.
2. Faça upload **de todos os arquivos e pastas extraídos diretamente para a raiz** de seu repositório GitHub; o `index.html` deve ficar na raiz.
3. Acesse `Settings > Pages > Build and deployment`.
4. Escolha `Deploy from a branch`, `main` e `/(root)`; salve.
5. Abra o link exibido na tela do Pages para conferir o resultado.

Leia `PUBLICAR_NO_GITHUB.md` para detalhes e `MANUTENCAO.md` para alterações futuras.

## Estrutura principal

```text
index.html
404.html
.nojekyll
assets/
  css/style.css
  js/config.js
  js/app.js
  images/*.webp
previews/galeria-novas-fotos.webp
PUBLICAR_NO_GITHUB.md
MANUTENCAO.md
README.md
```

## Configuração dos contatos

O WhatsApp e o Instagram são configuráveis em `assets/js/config.js`. A edição dos textos visíveis deve ser feita em `index.html`. O formulário não grava dados em servidor: prepara a mensagem para o usuário confirmar o envio no WhatsApp.

## Observação sobre fotos

As imagens dos pets foram criadas digitalmente para fins de divulgação. Se quiser ilustrar a estrutura ou os pacientes reais da clínica, substitua as fotos por material fotográfico autorizado.


## Ajustes V5

- Correção das dimensões e do enquadramento das imagens nas seções **Cadastro** e **Nosso diferencial**.
- Revisão de responsividade para desktop, tablet e mobile.
- Validação extra de caminhos de arquivos, HTML e JavaScript.


## V6: novo enquadramento da campanha visual

- Missão/Visão/Valores: nova foto do golden retriever ajustada para a coluna direita.
- Cadastro: nova foto do bulldog francês em uma área com proporção natural e sem cortes.
- Nosso diferencial: foto de golden retriever e gato em um cartão horizontal, mantendo os animais visíveis.
- Novos arquivos: `missao-golden-v6.webp`, `cadastro-bulldog-v6.webp`, `diferencial-pets-v6.webp`.
- Layout adaptativo para smartphones, tablets e desktop.

A imagem do bulldog inclui um balão ilustrado. Os textos das seções são HTML, mantendo seleção e acessibilidade.
