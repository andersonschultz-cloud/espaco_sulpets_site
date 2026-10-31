# Relatório de validação — Espaço Sul Pets V6

**Testes executados no pacote:**

- Conferência de referências locais de imagens, CSS, JS e links internos: **OK**.
- Integridade das imagens (WebP/PNG): **OK**.
- Parse de CSS e sintaxe JavaScript (`node --check`): **OK**.
- Teste visual das três seções redesenhadas em Chromium isolado: **320, 390, 768, 1024, 1440 e 1920 px**, sem rolagem horizontal.
- Simulação funcional do menu mobile: abriu/fechou corretamente.
- Validação dos campos do formulário: campos obrigatórios bloqueiam formulário vazio e aceitam preenchimento válido.
- Destino WhatsApp configurado: **https://wa.me/5551986133553**.

**Limites dos testes:**

- A navegação HTTP completa do site pelo Chromium neste ambiente foi bloqueada; o teste visual foi realizado com conteúdo isolado e os testes funcionais com o JavaScript original em DOM de testes.
- O envio efetivo ao WhatsApp não é possível sem a interação do usuário. O site apenas prepara a mensagem para confirmação no aplicativo.
- Recomendamos conferir o site publicado em um iPhone e um Android reais, especialmente comportamento do WhatsApp e fontes externas.

Pré-visualizações das seções alteradas em `previews/` (desktop e mobile).
