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
            ((playerSelection === "Scissors" || playerSelection === "Scissor") &&  computerSelection === "Scissors")){
                return(0);
            }
            else if ((playerSelection === "Rock" &&  computerSelection === "Paper") || 
            (playerSelection === "Paper" &&  computerSelection === "Scissors") ||
            ((playerSelection === "Scissors" || playerSelection === "Scissor") &&  computerSelection === "Rock")){
               return (1);
            }
            else if ((computerSelection === "Rock" &&  playerSelection === "Paper") || 
            (computerSelection === "Paper" &&  (playerSelection === "Scissors" || playerSelection === "Scissor")) ||
            (computerSelection === "Scissors" &&  playerSelection === "Rock")){
               return(2)
            }
    }


    // return("Tie for the round");
    // return (`Computer Wins the round, You Lose! ${computerSelection} beats ${playerSelection}`);
    // return(`You Win the round, Computer Loses! ${playerSelection} beats ${computerSelection}`)


function wins(num, computerSelection, playerSelection){
    if(num === 0){
        return (document.getElementById('output').textContent = "Tie for the round");
       
    }
    else if (num === 1){
        compWin++;
       return( document.getElementById('output').textContent = `Computer Wins the round, You Lose! ${computerSelection} beats ${playerSelection}`);
        
      
    }
    else if (num === 2){
        playWin++;
        return(document.getElementById('output').textContent = `You Win the round, Computer Loses! ${playerSelection} beats ${computerSelection}`);
        
    }
}




    let compWin = 0;
    let playWin = 0;


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice(randNum())
    document.getElementById('player').textContent = playerSelection;
    document.getElementById('computer').textContent = computerSelection;

    let num = playRound(playerSelection,computerSelection);  




    wins(num, playerSelection, computerSelection)



    
document.getElementById('player-win').textContent = playWin;
document.getElementById('computer-win').textContent = compWin;
  })
});

