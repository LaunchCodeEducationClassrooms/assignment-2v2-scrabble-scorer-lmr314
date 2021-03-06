// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  for (let i = 0; i < word.length; i++) {  
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}

	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userWord = input.question("Let's play some scrabble!\n\nEnter a word: ");
};

function simpleScore(word) {
  word = word.toUpperCase();
  score = word.length;
  return score;
};


function vowelBonusScore(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  score = 0
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])){
      score = score + 3; 
    } else {
      score = score + 1; 
    }
  }
  
  return score
};


function scrabbleScore(word) {
	word = word.toLowerCase();
	let letterPoints = 0 ;
	for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i]
    currentLetterPoints = Number(newPointStructure[currentLetter])    
    letterPoints += currentLetterPoints
	}
  return letterPoints;
}

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
];


function scorerPrompt() {
  gameChoice = Number(input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `));
  while (gameChoice !== 0 && gameChoice !== 1 && gameChoice !== 2) { 
    gameChoice = Number(input.question('You did not choose a valid game. Please Enter 0, 1, or 2: '))
  }
  console.log(`Score for '${userWord}': ${scoringAlgorithms[gameChoice].scoringFunction(userWord)}`)
  return gameChoice
  
};


function transform(object) {
  newObj = {}
  for (const key in object) {
    for (let i = 0; i < object[key].length; i++){
    newObj[object[(key)][i].toLowerCase()] = Number(key)
    }
  }

  return newObj
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
initialPrompt();
scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

