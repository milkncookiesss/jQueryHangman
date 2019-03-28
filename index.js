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
    $('.wordDisplay').append(`<ul>${displayWord[i]}<ul>`);
    }
  }
}

//guess letter func
const letterGuess = (e) => {
  // debugger;
  console.log(e);
  // console.log('the prompt ', wordPrompt);
  // console.log(displayWord);
  console.log('these dont match? ', e === 'a');
  if (!wordPrompt.includes(e)) {
    guessCount = guessCount - 1;
    $('.guesses').text(guessCount);
  } else {
    for (let j = 0; j < wordPrompt.length; j++) {
      console.log(e === wordPrompt[j]);
      if (e === wordPrompt[j]) {
        displayWord[j] === e;
      }
    }
  }
  // for(let j = 0; j < wordPrompt.length; j++) {
  //   if (e === wordPrompt[j]) {
  //     displayWord.splice(j, 1, e);
  //   } else {
  //     guessCount--;
  //   }
  // }
}

//checks if user wins
const winCheck = () => {
  if (!displayWord.includes('_')) {
    winsCount++;
    gameOn = false;
    $('.wordDisplay').text('Well done you win!');
    $('.genButton').html(`<button class="genButton"> Play again? </button>`);
  }
}