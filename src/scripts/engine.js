const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        livesCounter: document.querySelector("#lives"),
        resultElements: [
            document.querySelector("#result1"),
            document.querySelector("#result2"),
            document.querySelector("#result3")
        ],
        startButton: document.querySelector("#start-button"),
        stopGame: document.querySelector("#stopGame")
    },
    values: {
        hitPosition: 0,
        result: 0,
        currentTime: 30,
        lives: 3,
        lifeCount: 0,
        results: [], // Array para armazenar os resultados de cada vida
        game: 1
    },
    actions: {
        timerId: null,
        countDownTimerId: null
    }
};

// Função para reproduzir o som
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.15;
    audio.play();
}

// Função para o contador do tempo
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);

        // Exibe o resultado da vida atual e armazena no array de resultados
        alert("O tempo acabou. O seu resultado foi: " + state.values.result);
        state.view.resultElements[state.values.lifeCount].textContent = `Partida ${state.values.game}: ${state.values.result}`;
        state.values.results.push(state.values.result);

        // Reseta o tempo e o resultado para a próxima vida
        state.values.result = 0;
        state.view.score.textContent = state.values.result;
        state.values.lives--;
        state.view.livesCounter.textContent = `x${state.values.lives}`;
        state.values.lifeCount++;
        state.values.game++;

        if (state.values.lives > 0) {
            // Reinicia o tempo para a próxima vida
            state.values.currentTime = 30;
            state.actions.countDownTimerId = setInterval(countDown, 1000);
            state.actions.timerId = setInterval(randomSquare, 500);

        } else {
            // Calcula a maior pontuação
            const highestScore = Math.max(...state.values.results);

            // Exibe os resultados e pergunta se deseja jogar novamente

            alert(`Parabéns! Sua maior pontuação foi ${highestScore}.`);

            // Pergunta ao usuário se ele quer jogar novamente
            const playAgain = confirm("Deseja jogar novamente?");
            if (playAgain) {
                resetGame();
                startGame(); // Reinicia o jogo
            } else {
                alert("Jogo encerrado. Até a próxima!");
                window.location.reload(true);
            }
        }
    }
}

// Função para atualizar a posição do inimigo
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

// Função para adicionar o evento de clique nas "caixas" (squares)
function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            }
        });
    });
}

// Função para resetar o estado do jogo
function resetGame() {
    state.values.lives = 3;
    state.values.lifeCount = 0;
    state.values.results = [];
    state.values.game = 1;
    state.values.result = 0;
    state.values.currentTime = 30;

    state.view.livesCounter.textContent = `x${state.values.lives}`;
    state.view.score.textContent = state.values.result;

    state.view.resultElements.forEach((resultElement, index) => {
        resultElement.textContent = `Partida ${index + 1}: ${state.values.result}`;
    });
}

// Função para iniciar o jogo
function startGame() {
    state.view.startButton.disabled = true; // Desabilita o botão "Start" após o início do jogo
    state.actions.countDownTimerId = setInterval(countDown, 1000);
    state.actions.timerId = setInterval(randomSquare, 500);
}

state.view.stopGame.addEventListener("click", ()=> {
    window.location.reload(true);
})

// Adiciona evento de clique para o botão "Start Game"
state.view.startButton.addEventListener("click", () => {
    resetGame();
    startGame();
});

// Função de inicialização
function init() {
    addListenerHitbox();
}

init();
