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

    function getPlayerChoice(){
        let value = prompt("Please Enter a value, Rock, Paper or Scissors. \nThe Prompt will be called 5 times for 5 rounds. \nCheck Console screen after.");
        if (!(value === "rock"|| value === "Rock"|| value === "RocK" || value === "ROCK" || value === "paper" || value === "Paper" || value === "PapeR" || value === "PAPER" || value === "scissors" || value === "Scissor" || value === "Scissors"|| value === "scissor" || value === "ScissorS" || value === "SCISSORS")){
        return getPlayerChoice();
        }
        else{
            return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();}
        
    }


    function playRound(playerSelection, computerSelection) {
            if ((playerSelection === "Rock" &&  computerSelection === "Rock") || 
            (playerSelection === "Paper" &&  computerSelection === "Paper") ||
            (playerSelection === "Scissors" &&  computerSelection === "Scissors")){
                return (0);
            }
            else if ((playerSelection === "Rock" &&  computerSelection === "Paper") || 
            (playerSelection === "Paper" &&  computerSelection === "Scissors") ||
            (playerSelection === "Scissors" &&  computerSelection === "Rock")){
                return (1);
            }
            else if ((computerSelection === "Rock" &&  playerSelection === "Paper") || 
            (computerSelection === "Paper" &&  playerSelection === "Scissors") ||
            (computerSelection === "Scissors" &&  playerSelection === "Rock")){
                return (2);
            }
    }



    function game(){
        let compwin = 0;
        let playerwin = 0;
            for (let i = 0; i < 5; i++){
                console.log(`Round ${i+1}`);
                let computerSelection = getComputerChoice(randNum());
                let playerSelection = getPlayerChoice();
                console.log(`Computer Choice: ${computerSelection}`);
                console.log(`Player Choice: ${playerSelection}`);
                let match = playRound(playerSelection, computerSelection);
                if (match === 0){
                    console.log("Tie for the round")
                }
                else if (match === 1){
                    console.log (`Computer Wins the round, You Lose! ${computerSelection} beats ${playerSelection}`);
                    compwin++;
                }
                else if (match === 2){
                    console.log(`You Win the round, Computer Loses! ${playerSelection} beats ${computerSelection}`);
                    playerwin++;
                }

            }
            if (compwin > playerwin){
           console.log(`%c Computer wins the game with ${compwin} wins against ${playerwin}`, `font-weight: 900; font-size: 20px;color: red; text-shadow: 3px 3px 0 8px;  text-align: center`)
            }
            else if (playerwin > compwin){
                console.log(`%c Player wins the game with ${playerwin} wins against ${compwin}`, `font-weight: 900; font-size: 20px;color: red; text-shadow: 3px 3px 0 8px; text-align: center`)
            }
            else{
                console.log(`%c It is a Tie with ${playerwin} for the player and ${compwin} for computer`, `font-weight: 900;  font-size: 20px;color: red; text-shadow: 3px 3px 0 8px; text-align: center;`)
            }
        }
    
console.log(game());