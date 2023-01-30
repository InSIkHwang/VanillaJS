const gameForm = document.querySelector("#random-game");
const gameMaxInput = document.querySelector("#max-number");
const gameGuessInput = document.querySelector("#guess-number");

const compareNumber = document.querySelector("#compareNumber");
const gameResult = document.querySelector("#gameResult");

function playSubmit(event) {
  event.preventDefault();
  const maxNumber = parseInt(gameMaxInput.value);
  const guessNumber = parseInt(gameGuessInput.value);
  const randomNumber = Math.ceil(Math.random() * maxNumber);

  if (guessNumber === randomNumber) {
    compareNumber.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}`;
    gameResult.innerHTML = "You won!";
  } else {
    compareNumber.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}`;
    gameResult.innerHTML = "You lost!";
  }
}

gameForm.addEventListener("submit", playSubmit);
