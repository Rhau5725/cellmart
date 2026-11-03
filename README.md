# Cellmart

Site estático responsivo em HTML, CSS e JavaScript, sem etapa de build.

Para visualizar: execute `node server.cjs` nesta pasta e abra http://127.0.0.1:4173.

Publicação na Vercel: usar esta pasta como raiz, preset Other, sem comando de build e saída na raiz. Repositório oficial: https://github.com/Rhau5725/cellmart. Site: https://cellmart-repo.vercel.app. A configuração `vercel.json` fixa o preset Other e serve os arquivos estáticos da raiz sem etapa de build.

O WhatsApp usa exatamente o endereço fornecido no briefing: https://wa.me/553172444883. Nenhum contato alternativo foi presumido.

Foram utilizadas a logo verde, a foto JPEG da bancada e todas as 12 provas sociais reais. Os prints são exibidos sem recorte e podem ser ampliados. As sete imagens HEIC não foram incorporadas nesta versão.

## Reformulação visual

A estrutura existente foi preservada. `premium.css` contém a evolução dos componentes, enquanto `assets/mascote.svg` traz a ilustração vetorial inspirada no alienígena e na ferramenta da logo. Flutuação, órbitas e deslocamento ao rolar usam transformações leves e respeitam movimento reduzido.

O carrossel inicia ao carregar a página, mesmo fora da tela, e avança a cada 4 segundos. Tem setas, indicadores, rolagem por toque, ampliação e botão de pausa/reprodução. O botão de reproduzir funciona mesmo mantendo o foco. Hover e foco não bloqueiam a reprodução; a pausa é controlada explicitamente pelo botão. Modal aberto e aba oculta suspendem temporariamente o timer. A navegação manual reinicia a contagem de 4 segundos. Movimento reduzido elimina transições animadas e mantém os controles de pausa disponíveis.

A nave em `assets/nave.svg` e `final.css` fica confinada à área visual do hero, com chegada desacelerada e feixe discreto. É decorativa, não captura cliques e não aparece na árvore de acessibilidade. A preferência por movimento reduzido desativa sua animação. Os estilos dos botões foram preservados.

## Cena independente do disco voador

`#universo-cellmart`, entre serviços e delivery, é uma nova cena separada do hero. O SVG em linha usa camadas metálicas, cabine de vidro, luzes no aro, reator, feixe, partículas e projeção no chão. `encounter.css` anima a aproximação em curva com desaceleração, depois mantém flutuação e efeitos suaves. `encounter.js` ativa a chegada ao rolar até a seção e suspende as animações fora da tela. Movimento reduzido apresenta a composição sem animações.

A cena não usa bibliotecas, WebGL ou novas dependências. Toda a área decorativa ignora cliques. O markup do hero, seus assets, CSS anterior, botões e script principal foram comparados com a versão anterior e permaneceram idênticos.

## Refinamento de composição e movimento

`refinement.css` organiza o painel do hero em proporção 1:1, com áreas separadas para mascote, bancada e mensagem. Mantém as animações originais e reserva espaço para o deslocamento existente durante a rolagem. Remove rótulos decorativos repetidos, mascotes secundários em cards e excessos de brilho; simplifica serviços, delivery, FAQ e contato sem remover informações comerciais.

A chegada do OVNI usa trajetória curva contínua via CSS Motion Path, com alternativa por transformações para navegadores sem suporte. A desaceleração termina sem ultrapassagem ou correção brusca de posição. A flutuação começa no mesmo estado em que a chegada termina, em um ciclo lento de 13 segundos. Feixe, partículas e iluminação ficaram mais discretos.

Foram revisadas larguras de 360, 768 e 1440 pixels: painel 1:1, ausência de overflow, nave enquadrada sem sobrepor o título, autoplay ativo, 12 provas sociais e links de contato preservados. CSS originais dos botões e script principal foram mantidos sem alterações.

## Família de personagens

Seis personagens vetoriais seguem a mesma cabeça, olhos, paleta e uniforme: manutenção com ferramenta, recebimento do celular, escudo de garantia, indicação do carrossel, curiosidade no FAQ e aceno no contato. Os SVGs estão em linha, com identificadores próprios para os gradientes. Cada figura ocupa espaço no fluxo do layout e ignora cliques.

`family.css` contém gestos diferentes por seção. `family.js` controla visibilidade e mantém no máximo um personagem secundário ativo por viewport. O hero e a nave têm prioridade quando estão em destaque. Personagens fora da tela e abas ocultas ficam pausados. Movimento reduzido desativa as animações e transições. O FAQ acompanha o estado real dos accordions; o personagem dos depoimentos reage à rolagem real do carrossel.

Testes em 360 e 1440 pixels confirmaram seis personagens sem sobreposição de textos ou botões, no máximo um ativo por vez, reação e restauração do FAQ, aceno em movimento e pausa fora da tela. Autoplay, 12 provas sociais, painel quadrado e URLs de WhatsApp continuam funcionando. Não foram alterados a animação principal, a nave, os estilos anteriores dos botões nem o script do carrossel.

O frete padrão está explicitamente limitado a viagens dentro de Barão de Cocais. Outras localidades e regiões afastadas exigem combinação prévia.

## Verificação e produção

Projeto estático: não há compilação nem dependências de produção. A pasta com HTML, CSS, JavaScript e assets é o próprio resultado de produção. Sintaxe JavaScript, caminhos locais, imagens e fluxos foram verificados no navegador em larguras de celular, tablet e desktop. Os links de WhatsApp foram conferidos sem enviar mensagens.

Antes da publicação, configurar `og:image` com a URL absoluta da logo no domínio definitivo e adicionar `og:url`/canonical. Não foi inventado perfil de rede social. Fontes Google e mapa requerem internet; há fontes de sistema como alternativa.


