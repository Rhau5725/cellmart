# Validação dos ajustes finais

Testes executados no navegador em viewports internos de 1440 e 360 pixels, usando a página real sem substituir timers ou simular a lógica do carrossel.

| Verificação | Desktop | Celular |
| --- | --- | --- |
| Autoplay com a seção fora da tela, desde o carregamento | Passou | Passou |
| Três avanços consecutivos em intervalos de 4 segundos | Passou | Passou |
| Pausa: posição inalterada por mais de 4 segundos | Passou | Passou |
| Retorno automático do slide 12 ao slide 1 | Passou | Passou |
| Reproduzir com foco mantido no próprio botão | Passou | Passou |
| Setas de avançar e voltar preservadas | Passou | Passou |
| 12 prints carregados sem imagem quebrada | Passou | Passou |
| URLs de WhatsApp com mensagens preenchidas | Passou | Passou |
| Ausência de overflow horizontal da página | Passou | Passou |
| Nave carregada e confinada ao painel de imagem | Passou | Passou |

O autoplay anterior dependia da visibilidade da seção e podia ficar bloqueado por hover/foco, inclusive pelo foco no botão de reproduzir. A correção remove essas condições de bloqueio e centraliza o timer, evitando múltiplas contagens simultâneas.

Os estilos existentes dos botões não foram alterados. A nave usa SVG de aproximadamente 2 KB e animações CSS de transformação/opacidade, desativadas por `prefers-reduced-motion`.

Sintaxe de JavaScript e servidor verificada com `node --check`. Projeto estático, sem compilação: os arquivos da pasta são a versão de produção. Não houve commit, push ou deploy.

## Nova cena independente do OVNI

Verificação no navegador em 360 e 1440 pixels: ativação por rolagem, transformação durante a aproximação, desaceleração até posição final, flutuação contínua e feixe visível passaram. Não houve sobreposição com o texto, captura de cliques pela decoração nem overflow horizontal. A nave ocupa cerca de 300 pixels visíveis no celular e 625 pixels no desktop testado.

Comparação exata do trecho HTML do hero e hashes SHA-256 dos três arquivos CSS existentes e do script principal confirmaram preservação da animação original, dos botões e do carrossel. A nova cena usa arquivos próprios e nenhum pacote adicional.

## Refinamento visual e painel quadrado

Em 360, 768 e 1440 pixels, a proporção medida do painel foi 1,000. O mascote mantém a animação `alien-float` de 6 segundos. Não houve overflow da página; os 12 prints, autoplay e URLs de WhatsApp continuam presentes e funcionais. A nave percorreu a trajetória até 100%, manteve flutuação e permaneceu enquadrada sem sobrepor o título, incluindo o ajuste específico para tablet.

Foram conferidas visualmente as composições do hero, serviços, delivery, depoimentos, FAQ e contato. Os arquivos CSS originais e o script do carrossel foram novamente comparados por hash e não mudaram; os refinamentos de layout ficam na folha adicional.

## Seis personagens em seções próprias

No navegador, em 360 e 1440 pixels, os seis personagens foram encontrados e ficaram visíveis em seus respectivos espaços. Nenhuma figura sobrepôs títulos, parágrafos ou botões. O máximo de personagens secundários ativos simultaneamente foi um, com todos pausados ao voltar para o hero.

A abertura e o fechamento de uma pergunta ativaram e restauraram a pose do alienígena do FAQ. A transformação do braço no aceno foi medida durante o gesto. O autoplay continuou avançando, com 12 provas sociais, URLs de WhatsApp válidas e proporção 1:1 do hero preservada. Os hashes dos arquivos anteriores de CSS, nave e script principal permaneceram iguais.
