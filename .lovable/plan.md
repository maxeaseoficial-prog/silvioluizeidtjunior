# Migração da página Método PSV

## Objetivo
Substituir a página principal atual pela versão mais recente da landing page do Silvio existente no repositório da MaxEase, sem alterar a origem nem trazer elementos gerais da MaxEase.

## Implementação
- Usar `src/routes/silviometodopsv.tsx` da branch `main` como fonte integral de estrutura, textos, seções, animações, responsividade, rodapé e comportamento.
- Adaptar a rota para `/` e manter o conteúdo isolado no componente da landing page deste projeto.
- Trocar apenas os caminhos de imagens de `/silviometodopsv/...` para `/images/silvio/...`, reutilizando os arquivos existentes.
- Preservar “Silvio Luis Eidt Junior”, a menção a vendas B2B e B2C e todos os CTAs apontando para `https://wa.me/5566999681305` em nova aba.
- Replicar os metadados atuais da fonte na rota principal, incluindo Open Graph e cartão do X/Twitter, com a imagem adaptada para o novo caminho e a URL canônica deste site independente.
- Não incluir cabeçalho, menu, páginas, componentes ou conteúdo institucional da MaxEase.

## Validação
- Conferir o resultado visual em desktop e mobile contra a página publicada de origem.
- Testar CTAs, links sociais, FAQ, animações e ausência de rolagem horizontal.
- Confirmar que a rota `/` abre corretamente e que a compilação automática termina sem erros.

## Fora do escopo
Alterações no repositório de origem, backend, integrações, conteúdo novo, recriação de imagens ou mudanças em outras páginas.
