"use strict";

//Variables globales
const startBtn = document.querySelector(".js-startBtn");
const startContainer = document.querySelector(".js-startContainer");
const endContainer = document.querySelector(".js-endContainer");
const hint = document.querySelector(".js-hint");
let ulContainer = document.querySelector(".js-ulContainer");
const btns = document.querySelectorAll(".js-btn");
let incorrectGuesses = document.querySelector(".js-acc");
let body = document.querySelector(".js-imgBody");
let failWord = document.querySelector(".js-failWord");
let endBtn = document.querySelector(".js-endBtn");
let attemptsContainer = document.querySelector(".js-attempts");
let winText = document.querySelector(".js-winText");
let winMsj = document.querySelector(".js-msj");

//Variables globales de letra y tecla
let wordSelected = "";
let letter = "";
let word = "";

//Array para guardar aciertos y fallos
let hits = 0;
let wrong = 0;
let attempts= 0;

//Array con las palabras y pistas
const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
];

//Funciones que generan número random y palabra random
const getRandomNumber = (max) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

const getRandomWord = () => {
  const randomNumber = getRandomNumber(wordList.length);
  word = wordList[randomNumber].word
  wordSelected = wordList[randomNumber].word.split("");
  hint.innerHTML = wordList[randomNumber].hint;
  attempts = word.length;
  attemptsContainer.innerHTML = attempts;
  console.log("The word is: ", wordSelected);
  return wordSelected, word, attempts;
};

//Función que crea la estructura de los li
const drawWord = (wordSelected) => {
  ulContainer.innerHTML = "";
  wordSelected.forEach((letter) => {
    const li = document.createElement("li");
    li.innerHTML = letter.toLowerCase();
    li.setAttribute("class", "letter hiddenLetter");
    ulContainer.appendChild(li);
    return li;
  });
};

//Función que vuelve a comenzar el juego
const handleReset = (event)=>{
  event.preventDefault();
  endContainer.classList.add('hidden');
  body.src = "";
  handleStart();
}


//Fin del juego
const endGame = () => {
  endContainer.classList.remove('hidden');
  failWord.innerHTML = word;
  endBtn.addEventListener('click', handleReset);
};

//Función que maneja los errores de letra
const wrongLetter = (wrong, attempts) => {
  incorrectGuesses.innerHTML = wrong;
  body.src = `./images/hangman-${wrong}.jpg`;
  if (wrong === word.length || wrong === 6) {
    body.src = "./images/hangman-6.jpg";
    wrong = 0;
    incorrectGuesses.innerHTML = '0';
    endGame();
  }
};

//Función que maneja si se gana del juego
const winGame = ()=>{
  wrong = 0;
  incorrectGuesses.innerHTML = wrong;
  startContainer.classList.remove('hidden');
  handleStart();
}

//Función que maneja los aciertos de letras
const correctLetter = (letter) => {
  const { children } = ulContainer;
  for (let i = 0; i < children.length; i++) {
    if (children[i].innerHTML === letter) {
      children[i].classList.remove("hiddenLetter");
      hits++;
    } else{
      wrongLetter(wrong, attempts);
    }
  };
   if(hits === wordSelected.length ){
    startContainer.classList.remove("hidden");
    winText.innerHTML = 'congratulations, you have won!';
    winMsj.innerHTML = 'Please refresh the page before play the game for the correct functionality';

  /*   winGame(); */
  } 
};

//Función que compara que la palabra selecionada incluya la letra o no
const compareLetters = (letter) => {
  if (wordSelected.includes(letter)) {
    correctLetter(letter);
  } else {
    wrong++;
    wrongLetter(wrong, attempts);
  }
};

//Función que recoge el valor de las letras click
const handleLetters = (event) => {
  const clickedBtn = event.target;
  letter = clickedBtn.textContent.toLowerCase();
  compareLetters(letter);
};

//Función inicial
const handleStart = () => {
  for (const btn of btns) {
    btn.addEventListener("click", handleLetters);
  };
  startContainer.classList.add("hidden");
  getRandomWord();
  drawWord(wordSelected);
};

//Evento inicial
startBtn.addEventListener("click", handleStart);
