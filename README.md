# Desafio de projeto - DIO - Jogo detona Ralph

Este projeto é um jogo inspirado em "Detona Ralph", onde o objetivo é clicar no personagem Ralph quando ele aparece em uma das nove áreas do painel. O jogo possui uma contagem regressiva e um sistema de vidas, permitindo que o jogador tente atingir a maior pontuação possível em três tentativas.

## Objetivo do Projeto

O projeto tem como objetivo criar uma interface de jogo interativa utilizando HTML, CSS e JavaScript. O usuário terá um tempo limitado e três vidas para tentar marcar o maior número de pontos, sendo exibido ao final o maior resultado em um `Alert`.

## Funcionalidades

1. **Painel de Jogo**: Área onde Ralph aparecerá aleatoriamente para que o jogador tente clicar nele.
2. **Contador de Tempo**: Exibe o tempo restante da rodada.
3. **Pontuação do Jogador**: Exibe a pontuação atual da rodada.
4. **Sistema de Vidas**: O jogador possui três vidas, e ao final de cada vida o resultado é registrado.
5. **Histórico de Resultados**: Mostra o resultado de cada vida e, ao final, exibe a maior pontuação entre as três tentativas.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização geral do jogo, como layout, cores, e responsividade.
- **JavaScript**: Lógica do jogo, incluindo movimentação aleatória do personagem, contagem de tempo e pontuação.

## Estrutura do Código

O código é composto por três partes principais:

1. **HTML**: Define a estrutura do jogo, incluindo áreas para o painel, contagem de tempo, pontuação, e sistema de vidas.
2. **CSS**: Define o layout e o design do jogo, como a disposição dos elementos e o estilo do personagem.
3. **JavaScript**: Controla a lógica do jogo, gerenciando o cronômetro, movimentação do personagem e atualizando a pontuação e vidas.

## Passo a Passo da Implementação

### HTML

- Estrutura principal do jogo com uma `div` container que engloba:
  - Um `menu` com o contador de tempo (`#time-left`), pontuação (`#score`), e contador de vidas (`#lives`).
  - O painel de jogo com nove quadrados (`div.square`), onde Ralph aparecerá aleatoriamente.
  - Uma seção `game-changes` que mostra o histórico das pontuações de cada vida em `result1`, `result2` e `result3`.
  - Uma `div` para os botões `#start-button` e `#stopGame` 

### CSS

- **Estilização da Interface**:
  - Define o layout responsivo para o painel de jogo e o menu de pontuação.
  - Usa a classe `.enemy` para exibir a imagem de Ralph ao aparecer em um quadrado do painel.

### JavaScript

- **Objetos de Estado**:
  - `state`: Armazena as variáveis e configurações principais, incluindo contadores e referências aos elementos HTML.
  - `view`: Contém as referências dos elementos HTML.
  - `values`: Armazena valores dinâmicos, como pontuação, vidas e tempo restante.

- **Funções Principais**:
  - `playSound`: Reproduz um áudio sempre que o jogador acerta Ralph, podendo ser utilizada com qualquer momento, basta chamá-la e passar o nome do arquivo sem a extensão.
  - `countDown`: Controla a contagem regressiva, encerrando a rodada quando o tempo acaba.
  - `randomSquare`: Escolhe um quadrado aleatório para Ralph aparecer.
  - `addListenerHitbox`: Adiciona um evento de clique a cada quadrado para verificar se o jogador clicou no quadrado certo (onde Ralph está).
  - `init`: Inicializa os eventos e o jogo.

- **Sistema de Vidas e Histórico**:
  - Após o tempo acabar, o jogo armazena o resultado da vida atual e exibe no histórico de resultados.
  - Depois de três vidas, o maior resultado é exibido com uma mensagem em um `Alert` parabenizando o jogador.
  - Após as três tentativas, o jogo reseta e permite uma nova sessão.

## Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. O jogo começará automaticamente. Clique no Ralph para marcar pontos enquanto o tempo estiver ativo!

