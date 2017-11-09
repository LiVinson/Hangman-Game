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

    var wtgDisplayed = wordToGuess;


//----------------------------------------------- CODE TO RUN---------------------------------------------------------

//Runs a loop through the length of the word to guess and changes the character to underlines. For each character in the string, checks if the value is not equal to a space. 
    
    for (i = 0; i < wtgLength; i++){
        
        if (wordToGuess[i] !== " ") {

            
            //If value is not a space, then replace that letter with an underscore and then a space
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], "_");
         
        } else { 

            console.log("before replacing with break symbol: " + wtgDisplayed[i])
            //If value is  a space, add a space to the end of the wtgDisplayed string of underlines

            numberOfSpaces += 1;
            var space = "&nbsp;"
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], space);
            
        }
    }

    //Determine how many letters user needs to guess, for each match of userGuess to one of the characters in the word, reduce the number To Guess by 1
    var numberToGuess = wtgLength - numberOfSpaces;

    console.log("what should display on screen: " + wtgDisplayed);

    //Creates a div and assigns it to a variable
    var underlinesDisplayed = document.createElement("div");

    //Assigns the div that was created a class name so it can be formatted in CSS
    underlinesDisplayed.className = "underlines";

    //Sets html text of the underlines div to the value of wtgDisplayed (Which should now be underlines)
    underlinesDisplayed.innerHTML = wtgDisplayed;

        console.log("what (possibly) is displaying on screen: " + wtgDisplayed)

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
            console.log("Invalid character. Please select a letter A -Z");
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
                

                //Call the compare function (defined above) that compares the userChoice to the characters in the random word
                compare(userChoice, wordToGuess);

            // If there is a match to previousGuess array, this ws already guessed
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
            console.log("The userGuess is not a match to any letters in " + wordToGuessArg);
    
            //Since there was not match, guesses remaining reduces by 1
            guessesRemaining -= 1;
            
            // The text onscreen updates to reflect the new # of guesses
            guessesRemainingSpan.innerHTML = guessesRemaining;
    
            //Will check if there are any guesses left e
            if (guessesRemaining < 1) {
            
                //If there are no guesses remaining, update the game message, increase the losses, and increase number of losses on screen. 
                gameMessageDiv.innerHTML = "Game Over! The correct answer is: " + wordToGuessArg;
                losses++;
                lossesSpan.innerHTML = losses;
                gameOver (); // FUNCTION TO BE DEFINED
                    
        
            //There are still more guesses left. Should listen for another key
            } else {
                    gameMessageDiv.innerHTML = "There is no " + userChoiceArg + "! Guess again!";
            }
        
        //There is  match between userName and a charcter in the random word
        } else { 
            
            console.log("It's a match! The letter " + userChoiceArg + " is in " + wordToGuessArg);    
            
            //(Not Working) For each character in the wordToGuess, replace the character that matches the userChoice
            for (k = 0; k < wordToGuessArg.length; k++) {
                //If the choice is a match
                if (userChoiceArg === wordToGuessArg.charAt(k)){

                    //Replace "&nbsp;" with a regular spce so the length in the displayed underlines and the word to guess matches  
                    var wtgDisplayedSpace =  wtgDisplayed.replace("&nbsp;", " ");
                    console.log("wtgDisplayed is temporarily " + wtgDisplayedSpace + "and the length is " + wtgDisplayedSpace.length)

                    //For the character in wtgDisplayed with the same index #, change the value to userCHoice(which is also the matching character)
                    
                    console.log(wtgDisplayedSpace[k]);
                    console.log(userChoiceArg);
                    
                    var wtgDisplayedSwitch = wtgDisplayedSpace.replace([k], userChoiceArg);

                    console.log("THis is the display word, after replacing the chatacter with the user choice: " + wtgDisplayedSwitch)

                    wtgDisplayed =  wtgDisplayedSwitch.replace(" ", space);

                    console.log("THis is after changing the space back to the html code for a space: " + wtgDisplayed)
                  

                    

                    //numberToGuess is set to number of characters (nonspaces); For each match the userguesses, the number reduces
                    numberToGuess -= 1;
                }
            } 

            underlinesDisplayed.innerHTML = wtgDisplayed;

        }  
    }        
        
//  GAMEOVER FUNCTION

function gameOver () {
    gameMessageDiv.innerHTML = "Game Over! The correct answer is " + wordToGuess;
    previousGuesses = [];
    guessesRemaining = 6;

    wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    wtgLength = wordToGuess.length;
    wtgDisplayed = wordToGuess;

    for (i = 0; i < wtgLength; i++){
        
        if (wordToGuess[i] !== " ") {

            
            //If value is not a space, then replace that letter with an underscore and then a space
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], "_");
         
        } else { 

            console.log("before replacing with break symbol: " + wtgDisplayed[i])
            //If value is  a space, add a space to the end of the wtgDisplayed string of underlines

            numberOfSpaces += 1;
            var space = "&nbsp;"
            
            
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[i], space);
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