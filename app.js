let num_of_rounds = 5; 
const pointsBoard = {
    computer: 0,
    player: 0
}

function computerPlay() {
    const outcomeArr = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3)
    return outcomeArr[computerChoice]
}

function whoWins(playerScore, computerScore){
    let result = `Your score ${playerScore}, Computer score ${computerScore}!`
    if(playerScore > computerScore){
        result +=  " You win !!!"
    }else if(playerScore < computerScore){
        result +=  " You lose !!!"
    }else{
        result +=  " It's a tie !!!"
    }
    return result;
}

function playRound(playerSelection, computerSelection) { 
    if(playerSelection === computerSelection){
        return `It's a tie!`
    }           
    if(
        (computerSelection  === "paper" &&  playerSelection === "rock")
        ||
        (computerSelection  === "rock" &&  playerSelection === "scissors")
        ||
        (computerSelection  === "scissors" &&  playerSelection === "paper")
    ){
        pointsBoard.computer += 1; 
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }else{
        pointsBoard.player += 1; 
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }

}

function validateInput(){
    let playerInput = '';
    while(true){
        playerInput = prompt("Choose between 'Rock, Paper or Scissors'")
        playerInput = playerInput.toLowerCase()
        if(
            (playerInput === 'rock') || 
            (playerInput === 'paper') || 
            (playerInput === 'scissors')
        ){
            break;
        }
    }
    return playerInput;
}

function game(){
    while(num_of_rounds > 0){
        const playerSelection = validateInput()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        --num_of_rounds;
    }
    console.log(whoWins(pointsBoard.player, pointsBoard.computer))
    pointsBoard.computer = 0
    pointsBoard.player = 0
}