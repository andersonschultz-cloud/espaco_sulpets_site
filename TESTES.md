# Testes e verificações — Espaço Sul Pets V7

## Resultado da revisão

- Renderização responsiva em **11 larguras**: 320, 375, 390, 430, 680, 768, 990, 1024, 1280, 1440, 1920 px.
- **Nenhuma rolagem horizontal** na página para as larguras avaliadas.
- Todas as imagens renderizadas e decodificadas nas capturas, incluindo fachada, cartaz do ciclo de vida e quatro fotos das etapas.
- Erros JavaScript no navegador: **0**.
- Menu mobile: abre e fecha ao escolher uma seção.
- Formulário: os campos obrigatórios impedem envio incompleto e a mensagem de teste contém nome do pet, tutor, contato, serviço e observações.
- URL WhatsApp verificada por teste controlado: `https://wa.me/5551986133553?text=...`.
- Síntaxe `node --check` dos scripts: aprovada.
- CSS lido sem erros de parsing.
- Caminhos dos recursos, âncoras internas, textos alternativos das imagens e rótulos de formulário: verificados.
- Recursos principais servidos localmente com HTTP 200.
- CNPJ informado: dígitos verificadores matematicamente válidos (isso **não** é consulta cadastral à Receita Federal).

## Limites dos testes

O ambiente restringiu navegação direta do Chromium para endereços de rede/arquivo. Para conferir renderização, layout, JavaScript e formulário, as páginas e recursos foram carregados no Chromium em um documento de teste com CSS, JS e imagens incorporados; a disponibilidade dos arquivos em HTTP foi checada separadamente. A entrega não garante o comportamento da aplicação externa do WhatsApp, da atualização do GitHub Pages ou de links de mapas — confira após publicar.

Arquivos de evidência: `previews/v7-validacoes.json`, `previews/v7-estrutura.json` e prévias `.webp`.
