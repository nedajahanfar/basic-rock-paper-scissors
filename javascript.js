
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    Ties:0
    }
    
    
    /* let's pick computers move first*/

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }
    return computerMove;
}

/*setting the result based on players move */

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You Lose!';
        } else if (computerMove === 'scissors') {
            result = 'You Win!';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie!'
        } else if (computerMove === 'rock') {
            result = 'You Win!';
        } else if (computerMove === 'scissors') {
            result = 'You Lose!';
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose!';
        } else if (computerMove === 'paper') {
            result = 'You Win!'
        } else if (computerMove === 'scissors') {
            result = 'Tie!';
        }
    }
    

        if (result === 'You Win!') {
            score.wins += 1;
        } else if (result === 'You Lose!') {
            score.losses += 1;
        } else if (result === 'Tie!') {
            score.ties += 1;
        };

        localStorage.setItem('score', JSON.stringify(score))
    
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML =
        `you picked <img class="move-icon" src="images/${playerMove}-emoji.png">, computer picked <img class="move-icon" src="images/${computerMove}-emoji.png">`
};  

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `WINS: ${score.wins} , LOSSES: ${score.losses}, TIES: ${score.ties}.`
}

/*now lets see, where do we need to call this function? */