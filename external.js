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
                return("Tie for the round");
            }
            else if ((playerSelection === "Rock" &&  computerSelection === "Paper") || 
            (playerSelection === "Paper" &&  computerSelection === "Scissors") ||
            ((playerSelection === "Scissors" || playerSelection === "Scissor") &&  computerSelection === "Rock")){
               return (`Computer Wins the round, You Lose! ${computerSelection} beats ${playerSelection}`);
            }
            else if ((computerSelection === "Rock" &&  playerSelection === "Paper") || 
            (computerSelection === "Paper" &&  (playerSelection === "Scissors" || playerSelection === "Scissor")) ||
            (computerSelection === "Scissors" &&  playerSelection === "Rock")){
               return(`You Win the round, Computer Loses! ${playerSelection} beats ${computerSelection}`)
            }
    }




const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice(randNum())
    document.getElementById('player').textContent = playerSelection;
    document.getElementById('computer').textContent = computerSelection;
    document.getElementById('output').textContent =  playRound(playerSelection,computerSelection);
  })
});
