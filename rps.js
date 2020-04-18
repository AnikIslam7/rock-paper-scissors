
let playerScore = 0;
let computerScore = 0; 
let winningPoints = 5;
let round = 1;

const resultsDiv = document.querySelector('#resultsText');
const score = document.createElement('p');
const roundUpdate = document.createElement('p');
const decision = document.createElement('p');

resultsDiv.appendChild(roundUpdate);
resultsDiv.appendChild(score);
resultsDiv.appendChild(decision);

const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id);
    });
});

function computerPlay(){
    let min = 3;
    let max = 6;
    let rando = parseInt (Math.random() * (max - min) + min);
    if (rando == 3){
        return "rock";
    } else if (rando == 4){
        return "scissor";
    } else {
        return "paper";
    };
}

function resetRound(){
    round = 0;
    playerScore = 0;
    computerScore = 0;
};

function playRound(playerSelection){

    let computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "scissor"){
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissor.";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        roundUpdate.textContent = "You lose! Rock beats paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissor.";
    } else if (playerSelection == "paper" && computerSelection == "scissor"){
        computerScore++;
        roundUpdate.textContent = "You lose! Scissor beats paper.";
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        playerScore++;
        roundUpdate.textContent = "You win! Rock beats scissor.";
    } else if (playerSelection == "scissor" && computerSelection == "rock"){
        computerScore++;
        roundUpdate.textContent = "You lose! Rock beats scissor.";
    } else {
        roundUpdate.textContent = "It's a tie!" + " You both picked " + playerSelection + ".";
    }

    if (playerScore < winningPoints && computerScore < winningPoints){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "";    
    }
    
    if (computerScore == winningPoints && playerScore < winningPoints){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "Computer wins, sorry!";
        resetRound();
    } else if (playerScore == winningPoints && computerScore < winningPoints){
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "You win, congratulations!";
        resetRound();
    } else if (playerScore == (winningPoints - 1) && computerScore == (winningPoints - 1)) {
        score.textContent = 'Round ' + round + ' - You: ' + playerScore + "  |  Computer: " + computerScore;
        decision.textContent = "Tie breaker!";
    }; 

    resultsDiv.appendChild(roundUpdate);
    resultsDiv.appendChild(score);
    resultsDiv.appendChild(decision);

    round++;
    };



