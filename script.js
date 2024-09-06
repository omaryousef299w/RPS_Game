/*creating a rock paper scissor game

  1. create the html strcutre for the game
  B. create variables for comnputer & player. 
  C. CREATE A CHOICES VAR THAT CONTAINS. ROCK,PAPER,SCISSOR.
  2. create an in common class name for all the button that. 
  3. get the buttons
  4. create an addEvenetlistner for each button
  5. set the variable content to the button textContent when it's clicked. 
  6. create a computerTurn function. Set a variable that return a random num between 1 to 3. Create a switch statment, if the random num equaled 1, set the computer var value to 'rock' 2 to 'paper' 3 'scissor'. 
  7. create WinnerCheck function. if the computer == rock RETURN a tornery opertior for the player. (player == 'paper' ? console.log('YOU WIN'): console.log('YOU LOSE')); 
  8. call the function in the addEventLisnter function. 
*/
let computer; 
let player; 
let choices = ['rock','paper','scissor'];
let RPS = document.querySelectorAll('.choiceBtn'); 

RPS.forEach((button) => button.addEventListener('click',function() {
  player = button.textContent;
  computer = computerTurn(); 
  let result = winnerCheck(); 
}))


function computerTurn () {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  switch(randomNum) {
    case 1:
      computer = 'ROCK'; 
      break;
    case 2: 
      computer = 'PAPER'; 
      break; 
    case 3:
      computer = 'SCISSOR';
      break;
  }
  return computer; 
}

function winnerCheck() {
  if(computer == player) {
    console.log(`computer: ${computer}\n player: ${player}\n IT'S A TIE `)
  }else if(computer == 'ROCK' && player == 'PAPER') { 
    console.log(`computer: ${computer}\n player: ${player}\n You win `)
  }else if(computer == 'PAPER' && player == 'SCISSOR') { 
    console.log(`computer: ${computer}\n player: ${player}\n You win `)
  }else if(computer == 'SCISSOR' && player == 'ROCK') { 
    console.log(`computer: ${computer}\n player: ${player}\n You win `)
  }else {
    console.log(`computer: ${computer}\n player: ${player}\n You lose `)
  }
}

// THAT'S IT NOTHING COMPLICATED. 