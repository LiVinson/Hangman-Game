//----GLOBAL VARIABLES-----------------------------------------------------------------------------------------

const WORDBANK = [
    "FLORIDA GATORS",
    "GEORGIA BULLDOGS",
    "TENNESSEE VOLUNTEERS",
    "SOUTH CAROLINA GAMECOCKS",
    "VANDERBILT COMMODORES",
    "KENTUCKY WILDCATS",
    "ALABAMA CRIMSON TIDE",
    "LOUISIANA STATE TIGERS",
    "OLE MISS REBELS",
    "MISSISSIPPI STATE BULLDOGS",
    "TEXAS A&M AGGIES",
    "AUBURN TIGERS",
    "ARKANSAS RAZORBACKS",
    "MISSOURI TIGERS"
];

const ALPHABET_LIST = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Begins the game: sets list of previous guesses, number of guesses, wins, and losses

let gameStats = {
    previousGuesses: [],
    guessesRemaining: 6,
    wins: 0,
    losses: 0,
    guessWordIndex: null, //index of word to guess in wordbank array
    guessWordActual: null, //This is the word that was chosen from the array, as an array
    guessWordBlanks: null, //Word chosen with _ for words, as an array
    guessWordWorkingString: null, //This is what will be used to display, and will be updated after each guess. Will have space concatenated into string
    guessWordCharsLeftToGuess: null, //This is the number of chars to guess. Equals # of letters - spaces/amp in array
    gameMessage: "",
    gameOver: false
}


let gameText = {
    wordToGuessDisplay: document.getElementById("word-to-guess"),
    gameMessageDisplay: document.getElementById("game-message"),
    previouslyGuessedDisplay: document.getElementById("previously-guessed"),
    guessesRemainingDisplay: document.getElementById("guesses-remaining"),
    winsDisplay: document.getElementById("wins"),
    lossesDisplay: document.getElementById("losses")
}

//------FUNCTION DECLARATIONS ---------------------------------------------------------------------
function setScoreInfo() {
    if (gameStats.previousGuesses.length) {
        gameText.previouslyGuessedDisplay.innerHTML = gameStats.previousGuesses.join(", ")
    } else {
        gameText.previouslyGuessedDisplay.innerHTML = "Any letters you have guessed will display here."
    }
    gameText.guessesRemainingDisplay.innerHTML = gameStats.guessesRemaining;
    gameText.winsDisplay.innerHTML = gameStats.wins;
    gameText.lossesDisplay.innerHTML = gameStats.losses;
    gameText.gameMessageDisplay.innerHTML = gameStats.gameMessage;
    gameText.wordToGuessDisplay.innerHTML = gameStats.guessWordWorkingString;
    return
}

function chooseWordToGuess() {
    gameStats.guessWordIndex = Math.floor(Math.random() * WORDBANK.length);
    gameStats.guessWordActual = WORDBANK[gameStats.guessWordIndex].split(""); //splits the string into an array including spaces/ampersands
    changeCharToUnderScore()
}

//Input: Each letter of word to be guessed in an array;
// Output: Each letter of word in array as underscore, with space and ampersand still included
function changeCharToUnderScore() {
    let guessWordArr = gameStats.guessWordActual;
    let blankWordArr = [];
    let numOfLetters = 0;

    guessWordArr.forEach(function (char, index) {
        if (ALPHABET_LIST.indexOf(char) > -1) { //checks if character is a letter or not, and if so replaces it with underscore
            blankWordArr[index] = "_";
            numOfLetters++
        } else {
            blankWordArr[index] = char;
        }
    });
    gameStats.guessWordCharsLeftToGuess = numOfLetters;
    gameStats.guessWordBlanks = blankWordArr; //This is an array with blanks for letters
    createWordString();

};

function createWordString() {
    let wordArr = gameStats.guessWordBlanks;
    if (gameStats.gameOver) {
        wordArr = gameStats.guessWordActual
    }
    let wordString = "";
    wordArr.forEach(function (char) {
        if (char === " ") {
            wordString += '&nbsp'; //If it's a space, add encoded space
        } else {
            wordString += char; //If an underscore, concantenate it onto string
        }
        wordString += " "; //Then add an extra space between all characters
    });
    gameStats.guessWordWorkingString = wordString;

    setScoreInfo();
}

function confirmGuessValid(event) {
    gameStats.gameMessage = "";
    userChoice = event.key.toUpperCase();
    // Compares the value of userChoice (key pressed) to each item in the alphabet Array. If the key press is not a letter, then return an error message
    if (ALPHABET_LIST.indexOf(userChoice) === -1) {
        gameStats.message = "Invalid character. Please select a letter A-Z";
        return;

        //If key pressed is a letter then proceed to the next test
    } else if (gameStats.previousGuesses.indexOf(userChoice) > -1) {
        gameStats.message = "The letter " + userChoice + " was already guessed. Please guess again.";
        return;
    } else {
        gameStats.previousGuesses.push(userChoice);
        //Call the compare function (defined below) that compares the userChoice to the characters in the random word
        compareGuessToWord(userChoice);
    }
}

function compareGuessToWord(userGuess) {
    //Checks if the workToGuess contains the userChoice and if it doesn't (returning value of -1), then it will say its not a match
    if (gameStats.guessWordActual.indexOf(userGuess) === -1) {
        //Since there was not match, guesses remaining reduces by 1
        gameStats.guessesRemaining--;

    } else {

        // For each character in the wordToGuess, replace the character that matches the userChoice
        for (k = 0; k < gameStats.guessWordActual.length; k++) {

            //If the choice is a match at a partiular index position, update the corresponding index in the guessWordBlank array
            if (userGuess === gameStats.guessWordActual[k]) {
                gameStats.guessWordBlanks[k] = userGuess;
                //numberToGuess is set to number of characters (nonspaces); For each match the userguesses, the number reduces
                gameStats.guessWordCharsLeftToGuess--;
            }
        }
        //Once all of the matching letters have been displayed for the guess, updates the HTML so it show on the screen.       
    }
    checkGameOver();
}


//  GAMEOVER FUNCTIONS
function checkGameOver() {

    if (gameStats.guessWordCharsLeftToGuess < 1) { //user won
        gameStats.wins++;
        gameStats.gameMessage = "Congrats! You won! Press the spacebar key to play again."
        gameStats.gameOver = true;
        createWordString()

    } else if (gameStats.guessesRemaining === 0) { //user lost
        gameStats.losses++;
        gameStats.gameMessage = `Game Over! The correct answer is ${WORDBANK[gameStats.guessWordIndex]}. Press  any key to play again.`
        gameStats.guessWordBlanks = WORDBANK[gameStats.guessWordIndex]
        gameStats.gameOver = true;
        createWordString()
    } else {
        console.log("game's not over, keep guessing!")
        createWordString()
    }
}


function initiateGame() {
    gameStats.previousGuesses = [],
        gameStats.guessesRemaining = 6,
        gameStats.guessWordIndex = null, //index of word to guess in wordbank array
        gameStats.guessWordActual = null, //This is the word that was chosen from the array, as an array
        gameStats.guessWordBlanks = null, //Word chosen with _ for words, as an array
        gameStats.guessWordWorkingString = null, //This is what will be used to display, and will be updated after each guess. Will have space concatenated into string
        gameStats.guessWordCharsLeftToGuess = null, //This is the number of chars to guess. Equals # of letters - spaces/amp in array
        gameStats.gameMessage = "",
        gameStats.gameOver = false
    chooseWordToGuess();
}


//Listens for a key to be pressed. WHen this occurs, the following block of code is run each time:
document.onkeyup = function (event) {
    if (gameStats.gameOver) {
        gameStats.gameOver = false;
        initiateGame();
    } else {
        confirmGuessValid(event)
    }


};

chooseWordToGuess();



//DESIGN:
//GET LOGO FOR EACH SEC SCHOOL - DONE
//GET SOME BASIC INFO FOR EACH SCHOOL
//FIGURE OUT HOW TO GET THE IMAGE AND INFO FOR SCHOOL TO BE DISPLAYED WHEN GAME IS OVER (WIN OR LOSE)
//FONT: COLOR, SIZE, FONT FAMILY
//GAME BACKGROUND DESIGN AND GENERAL BACKGROUND DESIGN
//MUSIC? (BONUS)