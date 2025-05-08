let number = Math.floor(Math.random() * 100) + 1;

function guessNum() {
  let guessInput = document.getElementById('input');
  let guess = parseInt(guessInput.value, 10);
  
  if (isNaN(guess)) {
    document.getElementById('HoL').innerHTML = "Please enter a valid number!";
    return;
  }

  if (guess > number) {
    document.getElementById('HoL').innerHTML = "Lower!";
  } else if (guess < number) {
    document.getElementById('HoL').innerHTML = "Higher!";
  } else if (guess === number) {
    document.getElementById('HoL').innerHTML = "You guessed it!";
  }
}

function reset() {
  window.location.reload();
}
