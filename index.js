let words = ['hello', 'dearly beloved', 'keyblade', 'gottem', 'aq is a goddess'];
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
let wordPrompt = '';
let displayWord = [];
let gamesCount = 0;
let winsCount = 0;
let guessCount = 5;
let gameOn = false;

//word generator
const genWord = () => {
  gamesCount++;
  let num = Math.floor(Math.random() * words.length);
  wordPrompt = words[num];
  wordPrompt = wordPrompt.split('');
  // displayWord = wordPrompt.slice();
  // console.log('the word prompt ', wordPrompt);
  // console.log('the display word ', displayWord);
  for(let x = 0; x < vowels.length; x++) {
    $('.vowels').append(`<ul class="letter">${vowels[x]}</ul>`);
  }
  for(x = 0; x < consonants.length; x++) {
    $('.consonants').append(`<ul class="letter">${consonants[x]}</ul>`);
  }
  if (gameOn) {
    alert('Game is already in process');
  } else {
    gameOn = true;
    for(let i = 0; i < wordPrompt.length; i++) {
      if (wordPrompt[i] === ' ') {
        displayWord.push(' ');
      } else {
        displayWord.push('_');
      }
    }
    for(i = 0; i < displayWord.length; i++) {
    $('.display-here').append(`<ul class="displayWords">${displayWord[i]}<ul>`);
    }
  }
}

//guess letter func
const letterGuess = (e) => {
  // debugger;
  // console.log('the e target ', $(e.target).text());
  let guess = $(e.target).text();
  let display = document.getElementsByClassName('displayWords');

  //deletes clicked letter
  $(e.target).remove();

  if (!wordPrompt.includes(guess)) {
    guessCount = guessCount - 1;
    $('.guessLeft').text(guessCount);
    if (gameOn) {
      winCheck();
    }
  } else {
    //2 ways to possibly display the letters
      //ideally I want to go through the dom and replace '_' at the correct position with the correct letter
    for (let j = 0; j < wordPrompt.length; j++) {
      if (guess === wordPrompt[j]) {
        displayWord.splice(j, 1, guess);
        display[j].textContent = guess;
      }
    }
    if (gameOn) {
      winCheck();
    }
  }
}

//checks if user wins
const winCheck = () => {
  if (!displayWord.includes('_')) {
    winsCount++;
    gameOn = false;
    $('.wordDisplay').text('Well done you win!');
    $('.genButton').text(`Play again?`);
  } else if (guessCount <= 0) {
    alert('you lose sucka');
  }
}