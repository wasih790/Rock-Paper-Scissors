 function randNum(){
        return Math.floor(Math.random() * 3) + 1;}

    function getComputerChoice(num){
        if (num === 1){
            return("Rock");
        }
        else if (num === 2){
            return("Paper");
        }
        else{
            return("Scissors");
        }
    }

    function playRound(playerSelection, computerSelection) {
            if ((playerSelection === "Rock" &&  computerSelection === "Rock") || 
            (playerSelection === "Paper" &&  computerSelection === "Paper") ||
            (playerSelection === "Scissors"  &&  computerSelection === "Scissors")){
                return(0);
            }
            else if ((playerSelection === "Rock" &&  computerSelection === "Paper") || 
            (playerSelection === "Paper" &&  computerSelection === "Scissors") ||
            (playerSelection === "Scissors"  &&  computerSelection === "Rock")){
               return (1);
            }
            else if ((computerSelection === "Rock" &&  playerSelection === "Paper") || 
            (computerSelection === "Paper" &&  playerSelection === "Scissors" ) ||
            (computerSelection === "Scissors" &&  playerSelection === "Rock")){
               return(2)
            }
    }



function wins(num, computerSelection, playerSelection){
    if(num === 0){
        return (document.getElementById('output').textContent = "Tie for the round");
       
    }
    else if (num === 1){
        compWin++;
       return( document.getElementById('output').textContent = `Computer Wins the round, You Lose! ${playerSelection} beats ${computerSelection}.`);
        
      
    }
    else if (num === 2){
        playWin++;
        return(document.getElementById('output').textContent = `You Win the round, Computer Loses! ${computerSelection} beats ${playerSelection}.`);
        
    }
}




    let compWin = 0;
    let playWin = 0;
 

function display(compWin, playWin,num,playerSelection, computerSelection){
    if(playWin === 3){
        document.getElementById('restart').innerHTML =  "<button class = 'btnRestart'>Restart The Game</button>"
        document.getElementById('game-win').textContent = "Player Wins the Game";
        
    }
    else if (compWin === 3){
        document.getElementById('restart').innerHTML =  "<button class = 'btnRestart'>Restart The Game</button>"
        document.getElementById('game-win').textContent = "Computer Wins the Game";
    }
    else{
        wins(num, playerSelection, computerSelection)
    }  
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice(randNum())
    document.getElementById('player').textContent = playerSelection;
    document.getElementById('computer').textContent = computerSelection;

    let num = playRound(playerSelection,computerSelection);

    display(compWin, playWin,num,playerSelection, computerSelection)
 

document.getElementById('player-win').textContent = playWin;
document.getElementById('computer-win').textContent = compWin;



})
});


const btn = document.querySelector('#restart');
btn.addEventListener('click', () => {window.location.reload()});