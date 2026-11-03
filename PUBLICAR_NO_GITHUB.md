# Como publicar o site no GitHub Pages

## 1. Criar o repositório

1. Entre em https://github.com/new.
2. Escolha um nome, por exemplo: `espaco-sul-pets`.
3. Selecione **Public**.
4. Clique em **Create repository**.

## 2. Subir o conteúdo do ZIP

1. Extraia o ZIP para seu computador.
2. Abra a pasta descompactada. Você deve ver `index.html`, `assets`, `README.md` e outros arquivos.
3. No GitHub, clique em **Add file → Upload files**.
4. Arraste **o conteúdo interno da pasta** (e não apenas um ZIP fechado) para a tela de upload.
5. Verifique que `index.html` está diretamente na raiz, no mesmo nível da pasta `assets`.
6. Clique em **Commit changes**.

**ATENÇÃO:** confira se o arquivo `index.html` aparece diretamente na raiz do repositório; não envie uma pasta de nível extra. O ZIP V6 já está preparado com os arquivos na raiz ao descompactar.

## 3. Ativar GitHub Pages

1. Abra **Settings** do repositório.
2. No menu lateral, abra **Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`.
5. Salve e acesse a URL indicada pelo GitHub assim que a publicação estiver concluída.

**Exemplo de URL:** `https://seu-usuario.github.io/espaco-sul-pets/`.

## 4. Fazer uma atualização depois

Edite os arquivos em seu computador e faça upload das versões novas no mesmo caminho. Você também pode usar Git no terminal:

```bash
git add .
git commit -m "Atualiza site Espaço Sul Pets"
git push origin main
```

## 5. O que testar depois de publicar

- Abra o site no computador e no celular.
- Clique em **Início**, **Sobre**, **Serviços**, **Missão, Visão e Valores** e **Cadastro**.
- Veja se as fotos carregam e o menu abre no celular.
- Faça um teste do formulário com dados fictícios e confira se o texto aparece corretamente no WhatsApp **sem enviar a mensagem de teste**.
- Verifique se os links de WhatsApp e Instagram apontam para os contatos corretos.

## Problemas comuns

**Aparece a página 404:** certifique-se de que `index.html` está na raiz e de que Pages usa `main / (root)`.

**As imagens sumiram:** confira se a pasta `assets/images` foi enviada com os mesmos nomes e letras maiúsculas/minúsculas.

**As alterações não aparecem:** atualize o navegador sem cache e confira se as mudanças já foram publicadas.

**O número mudou:** altere `assets/js/config.js` e também o número visível no `index.html`.


## Atualização V7

A publicação da V7 adiciona uma nova seção de localização e uma seção de ciclo de vida, sem exigir banco de dados, servidor ou compilação. Faça o upload dos **arquivos extraídos** para a raiz do repositório e substitua os arquivos com mesmo nome. O arquivo principal continua sendo `index.html`.

Após a publicação, abra o site tanto no computador como no celular e confirme que o botão **Ver rota no Google Maps** leva à rua correta e que o **WhatsApp** abre com a mensagem de teste. O envio da mensagem depende da confirmação do cliente no aplicativo.
