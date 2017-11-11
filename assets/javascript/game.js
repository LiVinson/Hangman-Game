//----DECLARE VARIABLES (Globally Defined) -------------------------------------------------------------------------------------------


    //Words that user will have to guess, randomly selected
    var wordBank = ["FLORIDA GATORS",
                    "GEORGIA BULLDOGS", 
                    "TENNESSEE VOLUNTEERS", 
                    "SOUTH CAROLINA GAMECOCKS",
                    "VANDERBILT COMMODORES",
                    "KENTUCKY WILDCATS",
                    "ALABAMA CRIMSON TIDE",
                    "LOUISIANA STATE TIGERS",
                    "OLE MISS REBELS",
                    "MISSISSIPPI STATE BULLDOGS",
                    "TEXAS AM AGGIES",
                    "AUBURN TIGERS",
                    "ARKANSAS RAZORBACKS",
                    "MISSOURI TIGERS"]

   

    //Creates an empty array to hold the users guesses; will need to reset at the end of each game
   var previousGuesses = [];
    
    //Equals the number of guesses user has used; resets after each round or stops the game if reaches a certain number (0)
    var guessesRemaining = 6;
        
    var wins = 0;
     
    var losses = 0;   
    
    var gameMessageDiv = document.getElementById("gameMessageDiv");

    // Grabs span on screen, and sets content equal to the value of wins, losses, previousGuesses, and guesses Remaining

        
    var previouslyGuessedSpan = document.getElementById("previouslyGuessedSpan");
    // previouslyGuessedSpan.innerHTML = previousGuesses;
    
    var guessesRemainingSpan = document.getElementById("guessesRemainingSpan");
    guessesRemainingSpan.innerHTML = guessesRemaining;

    var winsSpan = document.getElementById("winsSpan");
    winsSpan.innerHTML = wins;

    var lossesSpan = document.getElementById("lossesSpan");
    lossesSpan.innerHTML = losses;

    //String created to confirm userGuess is valid character
    var alphabetList = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

    //In order to make the alphabet string split into an array with separate items, must use "toString" otherwise length shows as 1 instead of 26
    var alphabetArray = alphabetList.toString().split(",");
   
    // A randomly chosen item from the wordBank array
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log("The word that was randomly chosen is: " + wordToGuess);

    //Sets variable equal to the length of the word to guess (incluedes any spaces)
    var wtgLength = wordToGuess.length;
        console.log("And it has " + wtgLength + " characters, including any spaces");
                //for each place in the index, check (if/else) if the value is a letter (part of the alpabet array). If so, replace it with an 
                //underline, else if it is an ampersand replace it with and ampersand (html) with spaces around, else it (it's a space) don't do
                // change anything. Then join together a string and have it displyed as underlines?

    //Varible equal to number of spaces in word to guess, initially set to 0
    var numberOfSpaces = 0;

    var wtgDisplayed = wordToGuess; //wtgDisplayed uses a space (not the html version)

    var spaceHTML = "&nbsp;" //For html to display spaces, user this variable in place of " "

    var spaceRegular = " "

    var gameOverWord = wordToGuess.replace(spaceRegular, spaceHTML)//This is the word to display if the user loses


//----------------------------------------------- CODE TO RUN---------------------------------------------------------

//Runs a loop through the length of the word to guess and changes the character to underlines. For each character in the string, checks if the value is not equal to a space. 
    
    for (i = 0; i < wtgLength; i++){
        
        if (wordToGuess[i] !== " ") {
            //If value is not a space, then replace that letter with an underscore and then a space
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], "_");
        }
        else 
        numberOfSpaces ++ //For each character that is a space logs a count.
    }
    
    var wtgDisplayedSpace = wtgDisplayed //wtgDisplayedSpace has underlines and a traditional space
    
    wtgDisplayed = wtgDisplayed.replace(/spaceRegular/g, spaceHTML); //replaces the traditional space with the "&nbsp;" so it can display in HTML

    //Determine how many letters user needs to guess, for each match of userGuess to one of the characters in the word, reduce the number To Guess by 1
    var numberToGuess = wtgLength - numberOfSpaces;

    //Creates a div and assigns it to a variable
    var underlinesDisplayed = document.createElement("div");

    //Assigns the div that was created a class name so it can be formatted in CSS
    underlinesDisplayed.className = "underlines";

    //Sets html text of the underlines div to the value of wtgDisplayed (Which should now be underlines)
    underlinesDisplayed.innerHTML = wtgDisplayed;

    //Locates the element with ID wordDiv, and attaches the underlinesDisplayed div that was created
    document.getElementById("wordDiv").appendChild(underlinesDisplayed);
   
   

    //Listens for a key to be pressed. WHen this occurs, the following block of code is run each time:
    document.onkeyup = function (event) {
        
        //Remove any game message from last guess
        gameMessageDiv.innerHTML = "";
        
        // Saves the value of the key pressed to userChoice, capitalized
        var userChoice = (event.key).toUpperCase();
            console.log("the key that was pressed (capitlized) was: " + userChoice);
            
        
        // Compares the value of userChoice (key pressed) to each item in the alphabet Array. If the key press is not a letter, then return an error message
        if (alphabetArray.indexOf(userChoice) === -1) { 
            gameMessageDiv.innerHTML = "Invalid character. Please select a letter A-Z";

        //If key pressed is a letter then proceed to the next test
        } else {
            console.log("A valid letter was chosen");

            //Compare the userChoice to each item in the previousGuess array to determine if the userChoice was previously guessed.
            if (previousGuesses.indexOf(userChoice) === -1) {
                console.log("This is a unique guess");
                

                //If value  is unique, push the userChoice value to the end of the previousGuesses array, update the previouslyGuessedSpan with the new value
                previousGuesses.push(userChoice);
                console.log("Now, previous guesses is: " + previousGuesses);
                previouslyGuessedSpan.innerHTML = previousGuesses;
                

                //Call the compare function (defined below) that compares the userChoice to the characters in the random word
                compare(userChoice, wordToGuess);

            // If there is a match to previousGuess array, this was already guessed
            } else {
                console.log("This was  guessed previously, guess again!");
                gameMessageDiv.innerHTML = "The letter " + userChoice + " was already guessed. Please guess again.";

            }
            
        }


    }

//When the compare function is called run the following:

    function compare(userChoiceArg, wordToGuessArg) {


        //Checks if the workToGuess contains the userChoice and if it doesn't (returning value of -1), then it will say its not a match
        if (wordToGuessArg.indexOf(userChoiceArg) === -1) {
           
            //Since there was not match, guesses remaining reduces by 1
            guessesRemaining -= 1;
            
            // The text onscreen updates to reflect the new # of guesses
            guessesRemainingSpan.innerHTML = guessesRemaining;
    
            //Will check if there are any guesses left e
            if (guessesRemaining < 1) {
            
                //If there are no guesses remaining, call gameOver
                gameOver();                    
        
            //There are still more guesses left. Should listen for another key
            } else {
                gameMessageDiv.innerHTML = "The userGuess is not a match to any letters in " + wordToGuessArg + "! Guess again!";
            }
        
        //There is  match between userName and a charcter in the random word
        } else { 
            
            console.log("It's a match! The letter " + userChoiceArg + " is in " + wordToGuessArg);    
            
            // For each character in the wordToGuess, replace the character that matches the userChoice
            for (k = 0; k < wordToGuessArg.length; k++) {
                
                //If the choice is a match at a partiular index position
                if (userChoiceArg === wordToGuessArg.charAt(k)){

                    //Takes the wtgDisplaySpace (this is the word to guess with traditional spaces) and extracts the first k letters
                    // (i.e. if match is at index 5, takes characters at index 0, 1, 2, 3, and 4) concatenates with the matching letter
                    // and concatenates with the rest of the string after the position of the matching letter (index position k + 1)
                    wtgDisplayedSpace = wtgDisplayedSpace.substr(0, k) + userChoiceArg +  wtgDisplayedSpace.substr(k + 1);
                    
                    console.log("After replacing the underlines with the user choice where there was a match: " + wtgDisplayedSpace)

                    //Changes the display word back to having HTML spaces, now with correct letters showing
                    wtgDisplayed =  wtgDisplayedSpace.replace(spaceRegular, spaceHTML);

                    console.log("THis is after changing the space back to the html code for a space: " + wtgDisplayed)
                  
                    //numberToGuess is set to number of characters (nonspaces); For each match the userguesses, the number reduces
                    numberToGuess -= 1;
                    console.log("Number or letters remaining to guess: " + numberToGuess)

                    if (numberToGuess <1)
                        gameOver(); //To be Defined
                }
            } 
            //Once all of the matching letters have been displayed for the guess, updates the HTML so it show on the screen.
            underlinesDisplayed.innerHTML = wtgDisplayed;

        }  
    }        
        
//  GAMEOVER FUNCTIONS

function gameOver () {
    //If the user won:
    if (numberToGuess < 1){ 
        wins++;
        winsSpan.innerHTML = wins;
        gameMessageDiv.innerHTML = "Congrats! You won! Press the spacebar key to play again."
           
        
    } else{ //If the user lost
        
        losses++;
        lossesSpan.innerHTML = losses
        gameMessageDiv.innerHTML = "Game Over! The correct answer is " + wordToGuess + " Press the spacebar key to play again."
    }

     //Listens for user to press space bar to reset the game
    document.onkeyup = function (event) {
        console.log(event.keycode)

        if (event.keycode == 32 ){
            
            //Resets guesses
            previousGuesses = [];
            guessesRemaining = 6;
            
            //Chooses new word, and updates length and display word previously defined to correspond to last word chosen
            wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
            wtgLength = wordToGuess.length;
            wtgDisplayed = wordToGuess;

            //Resets the word displayed on the screen
            for (i = 0; i < wtgLength; i++){
                
                if (wordToGuess[i] !== " ") {
                    //If value is not a space, then replace that letter with an underscore
                    wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], "_");
                }
                else {
                numberOfSpaces ++ //For each character that is a space logs a count.
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
}

    

 


        //DESIGN:
            //GET LOGO FOR EACH SEC SCHOOL - DONE
            //GET SOME BASIC INFO FOR EACH SCHOOL
            //FIGURE OUT HOW TO GET THE IMAGE AND INFO FOR SCHOOL TO BE DISPLAYED WHEN GAME IS OVER (WIN OR LOSE)
            //FONT: COLOR, SIZE, FONT FAMILY
            //GAME BACKGROUND DESIGN AND GENERAL BACKGROUND DESIGN
            //MUSIC? (BONUS)