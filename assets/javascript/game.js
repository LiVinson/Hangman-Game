//----DECLARE VARIABLES (Globally Defined) -------------------------------------------------------------------------------------------


//Starting Logic:
//chooseWordToGuess(): Choose a random word and split into array - store as wordArray
//changeCharToUnderScore(): For each character in the word, swap a "_" for the underscore and store underscoreArray
//createWordString: Change the udnerscore into a string with proper spaces
//Update the text on screen with word values

//On button press:

//confirmGuessValid: Check if user pressed a valid key
//compareGuessToWord: If wrong, decrements guessesLeft, checks if game is over;
//If correct, decrements numLetterstoGuess, calls to createWordString for update


//Each time user makes a correct guess, replace the index of the correct guess in underscoreArray with the value of
//same index from wordArray (don't change it all just the match. Should keep anything changed previously) - will need to splice string

//Call wordString again to update the string and resave working Guess.
//Updates guesses remaining, etc

//Redisplay string (with letters where correct.)


//Words that user will have to guess, randomly selected

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

//Dynamically displays text on screen based on current game stats
function setScoreInfo() {

    if (gameStats.previousGuesses.length) {
        gameText.previouslyGuessedDisplay.innerHTML = gameStats.previousGuesses.join(", ")
    } else {
        console.log("nothing guessed yet");
        gameText.previouslyGuessedDisplay.innerHTML = "Any letters you have guessed will display here."
    }
    gameText.guessesRemainingDisplay.innerHTML = gameStats.guessesRemaining;
    gameText.winsDisplay.innerHTML = gameStats.wins;
    gameText.lossesDisplay.innerHTML = gameStats.losses;
    gameText.gameMessageDisplay.innerHTML = gameStats.gameMessage;
    gameText.wordToGuessDisplay.innerHTML =  gameStats.guessWordWorkingString;
    return
}

function chooseWordToGuess() {
    gameStats.guessWordIndex = Math.floor(Math.random() * WORDBANK.length);
    gameStats.guessWordActual = WORDBANK[gameStats.guessWordIndex].split(""); //splits the string into an array including spaces/ampersands
}

//Input: Each letter of word to be guessed in an array;
// Output: Each letter of word in array as underscore, with space and ampersand still included
function changeCharToUnderScore() {
    let guessWordArr = gameStats.guessWordActual;
    let blankWordArr = [];
    let numOfLetters = 0;
    //for each letter in the displayWord, determine if it is a letter, a space, or an ampersand
    console.log("chosen word in array before swapping for _", guessWordArr);

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
};

function createWordString() {
    let wordString = "";
    gameStats.guessWordBlanks.forEach(function (char) {
        if (char === " ") {
            wordString += '&nbsp'; //If it's a space, add encoded space
        } else {
            wordString += char; //If an underscore, concantenate it onto string
        }
        wordString += " "; //Then add an extra space between all characters
    });
    gameStats.guessWordWorkingString = wordString;

    setScoreInfo();
    return;
}

// console.log("word in array after swapping letters for underscores", displayWordArr)

// console.log("after changing from array to string:", displayWordArr.join(" "));
// gameStats.guessWordBlanks = displayWordArr.join(" ");
// gameStats.guessWordCharsLeftToGuess = displayWordArr.length - numbOfNonLetters;
// }


function confirmGuessValid(event) {
    gameStats.gameMessage = "";
    userChoice = event.key.toUpperCase();
    console.log("userChoice: ", userChoice);
    // Compares the value of userChoice (key pressed) to each item in the alphabet Array. If the key press is not a letter, then return an error message
    if (ALPHABET_LIST.indexOf(userChoice) === -1) {
        gameStats.message = "Invalid character. Please select a letter A-Z";
        return;

        //If key pressed is a letter then proceed to the next test
    } else if (gameStats.previousGuesses.indexOf(userChoice) > -1) {
        console.log("This was  guessed previously, guess again!");
        gameStats.message = "The letter " + userChoice + " was already guessed. Please guess again.";
        return;
    } else {
        console.log("This is a unique guess");
        gameStats.previousGuesses.unshift(userChoice);
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
                console.log("After replacing the underlines with the user choice where there was a match: " + gameStats.guessWordBlanks)

                //numberToGuess is set to number of characters (nonspaces); For each match the userguesses, the number reduces
                gameStats.guessWordCharsLeftToGuess--;
                console.log("Number or letters remaining to guess: ", gameStats.guessWordCharsLeftToGuess)
            }
        }
        //Once all of the matching letters have been displayed for the guess, updates the HTML so it show on the screen.       
    }
    checkGameOver();
}

//Needed?
function displayFullWord(wordIndex) {
    let displayWord = WORDBANK[wordIndex];


}

//  GAMEOVER FUNCTIONS

function checkGameOver() {

    if (gameStats.guessWordCharsLeftToGuess < 1) { //user won
        gameStats.wins++;
        gameStats.gameMessage = "Congrats! You won! Press the spacebar key to play again."
        gameStats.gameOver = true;
        setScoreInfo()
    } else if (gameStats.guessesRemaining === 0) { //user lost
        gameStats.lossess++;
        gameStats.gameMessage = `Game Over! The correct answer is ${WORDBANK[gameStats.wordIndex]}. Press  spacebar to play again.`
        gameStats.guessWordWorkingString = WORDBANK[gameStats.wordIndex]
        gameStats.gameOver = true;
        setScoreInfo()
    } else {
        console.log("game's not over, keep guessing!")
        createWordString()
    }
}


//Listens for user to press space bar to reset the game
document.onkeyup = function (event) {
    console.log(event.keycode)

    if (event.keycode == 32) {

        //Resets guesses
        previousGuesses = [];
        guessesRemaining = 6;

        //Chooses new word, and updates length and display word previously defined to correspond to last word chosen
        guessWord = WORDBANK[Math.floor(Math.random() * WORDBANK.length)];
        wtgLength = guessWord.length;
        wtgDisplayed = guessWord;

        //Resets the word displayed on the screen
        for (i = 0; i < wtgLength; i++) {

            if (guessWord[i] !== " ") {
                //If value is not a space, then replace that letter with an underscore
                wtgDisplayed = wtgDisplayed.replace(guessWord[i], "_");
            } else {
                numberOfSpaces++ //For each character that is a space logs a count.
            }
        }

        wtgDisplayedSpace = wtgDisplayed //wtgDisplayedSpace has underlines and a traditional space

        wtgDisplayed = wtgDisplayed.replace(/spaceRegular/g, spaceHTML); //replaces the traditional space with the "&nbsp;" so it can display in HTML

        //Determine how many letters user needs to guess to win
        numberToGuess = wtgLength - numberOfSpaces;

        //Sets html text of the underlines div to the value of wtgDisplayed (Which should now be underlines)
        underlinesDisplayed.innerHTML = wtgDisplayed;
    }
}


chooseWordToGuess();
changeCharToUnderScore();
createWordString();


//Listens for a key to be pressed. WHen this occurs, the following block of code is run each time:
document.onkeyup = function (event) {
    confirmGuessValid(event)

};




//DESIGN:
//GET LOGO FOR EACH SEC SCHOOL - DONE
//GET SOME BASIC INFO FOR EACH SCHOOL
//FIGURE OUT HOW TO GET THE IMAGE AND INFO FOR SCHOOL TO BE DISPLAYED WHEN GAME IS OVER (WIN OR LOSE)
//FONT: COLOR, SIZE, FONT FAMILY
//GAME BACKGROUND DESIGN AND GENERAL BACKGROUND DESIGN
//MUSIC? (BONUS)