const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highScore = 0;

//document.message is used over and over again so just call a function so thta we can resuse it

const displayMessage= function(message){
    document.querySelector('.message').textContent = message;

}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);


  if (!guess) {
    displayMessage('No number')
 }

  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#333";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
   
  }

  //when guess go wrong

  else if(guess !== secretNumber){

    if (score > 1) {
        displayMessage( guess > secretNumber ? 'Too high' : 'Too low');
        score = score - 1; 
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage('You lost the game')
    
        document.querySelector(".score").textContent = 0;
      }
  
  }
  
});