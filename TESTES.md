# Relatório de verificação — Espaço Sul Pets V8

**Data:** 9 de novembro de 2026

## Correções aplicadas

- Cachorrinho do loading espelhado horizontalmente, para ficar virado para a direita enquanto o contêiner segue da esquerda para a direita. A animação agora se repete enquanto o carregamento estiver visível.
- Contato alterado para **(51) 99304-9408**; URL oficial `https://wa.me/5551993049408` aplicada em botões, formulário, rodapé, fallback JavaScript e dados estruturados JSON-LD.
- Validação do campo de telefone do tutor: exige de 10 a 13 dígitos, evitando mensagens com números inválidos.
- Rotina do preloader agora lida também com documentos que já estejam em estado `complete`, com tempo-limite de segurança.
- Removidas prévias antigas que continham o número de contato anterior dentro de imagens.

## Testes realizados

- Sintaxe do JavaScript: `node --check` dos dois scripts, sem erros.
- Testes unitários simulados em Node.js (`tests/smoke.cjs`) do menu (abrir/fechar), formulário vazio, telefone inválido, mensagem WhatsApp preenchida e codificada, número de destino, execução do encerramento do loading e configurações de contato: **aprovados**.
- Referências estáticas de HTML (imagens, JavaScript e CSS), âncoras, rótulos, IDs, telefone nos dados estruturados e decodificação de imagens: **aprovados**.
- Servidor HTTP local: recursos principais retornam **200 OK**.
- CSS: parsing sintático e verificação da regra que espelha apenas a figura do cachorro: **aprovados**.

## Limitações

O Chromium disponível no ambiente bloqueou navegações de teste por política do administrador (`ERR_BLOCKED_BY_ADMINISTRATOR`), inclusive URLs locais e arquivos. Assim, **não foi possível executar uma validação visual real da V8** em diferentes resoluções, nem simular um envio completo no site aberto no navegador. Os testes funcionais em JavaScript foram realizados em ambiente controlado, sem conexão real ao WhatsApp. Recomenda-se uma checagem rápida em desktop e em aparelhos iOS/Android após publicar.

**Importante:** o site prepara a mensagem, mas o cliente precisa confirmar o envio pelo WhatsApp. Não há banco de dados nem envio automático.
