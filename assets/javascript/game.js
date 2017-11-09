//----DECLARE VARIABLES -------------------------------------------------------------------------------------------


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

    //***Figure out how get the html to display the previous guesses, guesses remaining, wins, and losses and update as the game goes.
   

    //Creates an empty array to hold the users guesses; will need to reset at the end of each game
   var previousGuesses = [];
    
    //Equals the number of guesses user has used; resets after each round or stops the game if reaches a certain number (0)
    var guessesRemaining = 6;
        
    var wins = 0;
     
    var losses = 0;   
    
    var gameMessage = " ";

    //String created to confirm userGuess is valid character
    var alphabetList = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

    //In order to make the alphabet string split into an array with separate items, must use "toString" otherwise length shows as 1 instead of 26
    var alphabetArray = alphabetList.toString().split(",");
   
    // A randomly chosen item from the wordBank array
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log("The word that was randomly chosen is: " + wordToGuess);

    


    //Get "underscore span" and for the HTML, set it equal to the random word, after the letters were changed to underscores

    var wtgLength = wordToGuess.length;
        console.log("And it has " + wtgLength + " characters, including any spaces");
                //for each place in the index, check (if/else) if the value is a letter (part of the alpabet array). If so, replace it with an 
                //underline, else if it is an ampersand replace it with and ampersand (html) with spaces around, else it (it's a space) don't do
                // change anything. Then join together a string and have it displyed as underlines?

    var numberOfSpaces = 0   
    
    var wtgDisplayed = wordToGuess
    
    for (j = 0; j < wtgLength; j++){
        
        if (wordToGuess[j] !== " ") {
            wtgDisplayed = wtgDisplayed.replace(wordToGuess[j], "_");
            
        }  
    console.log(wtgDisplayed);
    }

    console.log("what to display on screen: " + wtgDisplayed);

    
    for (i = 0; i < wtgLength; i++) {
        
        if (alphabetList.indexOf(wordToGuess[i]) === -1) { 
            console.log("There is a space between " + wordToGuess[i-1] + " and " + wordToGuess[i+1]);
            console.log("Number of spaces in " + wordToGuess + ":" + (numberOfSpaces += 1));
            numLettersToGuess = (wtgLength - numberOfSpaces);
            console.log("There are " + numLettersToGuess);

        }
    };
//NOt sure if this should go in for or not: For each index in the word to guess, if the value is a character, 
//replace that position in a duplicate string with an underline 
    

 //Determine how to get underlines for randomWord to be displayed, an ampersand for an ampersand and and space for any other 
    //character in word

//Practice Underline Code:


    // var underlines = ["a", "b", "c"];
    
    // underlines.join(" ");

// console.log(underlines);
//    
                // wordToGuessLength = wordToGuess.length;
                // randomWordChar = "";

                // wordToGuessChar = wordToGuess.split("");
                // console.log(wordToGuessChar);
                
                // spaceIndex = wordToGuessChar.indexOf(" ");
                // if spaceIndex !== -1

                //     wordToGuessChar[spaceIndex] =

                // for (a = 0; a < wordToGuessLength; a++){
                
                //     var underline = document.getElementById("underscores");
                    
                //     randomWordChar += wordToGuess[a];
            
            
            // if (randomWordChar === wordToGuess[0])
            //     underline.innerText =  randomWordChar; 

            // else
            //     underline.innerText = underline + randomWordChar;
                    
        // }

            // console.log(randomWordChar);

            // underline.innerText = randomWordChar;

 
//****DEFINE FUNCTIONS -------------------------------------------------------------------------------------------

//FUNCTION 1: COMPARE FUNCTION

    //This  will compare the characters in the random word to the userGuess and take action based on if it is a match or not
        //Consider comparing the userChoice to an array of the randomword characters instead of string so that 
        //the match can be removed and it will tke care of duplicate letters too

    function compare(userChoiceArg, wordToGuessArg) {
        //Checks if the workToGuess contains the userChoice and if it doesn't (returning value of -1), then it will say its not a match
        if (wordToGuessArg.indexOf(userChoiceArg) === -1) {
            console.log("The userGuess is not a match to any letters in " + wordToGuessArg);

            //Since there was not match, guesses remaining reduce by 1
            guessesRemaining -= 1;
            console.log(guessesRemaining);

            //Will check if there are any guesses left and, if not, will end the game
            if (guessesRemaining < 1) {
            
                //Game Over: Display message: You Lose, increase Losses total. Display the correct answer (preferable as blanks,
                //but could also using the blanks)
                gameMessage = "Game Over! The correct answer is: " + wordToGuessArg;
                losses++;
                gameOver (); // FUNCTION TO BE DEFINED
                    
       
            //There are still more guesses left. Should listen for another key
            } else {
                 gamesMessage = "You have " + guessesRemaining + " guesses remaining!";
            }
        
        //There is  match between userName and a charcter in the random word
        } else { 
            console.log("It's a match! The letter " + userChoiceArg + " is in " + wordToGuessArg)    
            
            //# of characters to guess - randomWord length - (number of characters that are not in the alphabet array )

          
            
            //Check if there are any letters remaining to guess
                // If all letters are guessed: 
                    //You Win, wins increase by 1
        }
    }   

//FUNCTION 2: GAMEOVER FUNCTION

    // function gameOver () {
        
        
        //Correct word is displayed
        //Stop listening for user key
        //Button appears
        //Add click to button; 
        //when clicked, calls another function

    // }
 
    // LISTEN UP FOR KEY PRESSED AND ACTIONS TO TAKE

//FUNCTION 3: Starts when a key is pressed

    document.onkeyup = function (event) {
        
        //Remove any game message from last time
        gameMessage = " ";
        
        // Saves the value of the key pressed to userChoice, capitalized
        var userChoice = (event.key).toUpperCase();
            console.log("the key that was pressed (capitlized) was: " + userChoice);
            
        
        // Compares the value of userChoice (key pressed) to each item in the alphabet Array, and takes an action based on true/false
        if (alphabetArray.indexOf(userChoice) === -1) { 
            console.log("Invalid character. Please select a letter A -Z");


        } else {
            console.log("A valid letter was chosen");

            //If keypress was valid, compare the userChoice to each item in the previousGuess array and if there is 
            //no match (unique guess), logs the guess into the previousGuess array.
            if (previousGuesses.indexOf(userChoice) === -1) {
                console.log("This is a unique guess");
                

                //Since it is unique, push the userChoice value to the end of the previousGuesses array
                previousGuesses.push(userChoice);
                console.log(previousGuesses);

                //Call the compare function (defined above) that compares the userChoice to the characters in the random word
                compare(userChoice, wordToGuess);

            // If there is a match to previousGuess array, this ws already guessed
            }else {
                console.log("This was  guessed previously, guess again!");
                gameMessage = "The letter " + userChoice + " was already guessed. Please guess again."
                //Go back and add this as a message to appear in HTML
            }
            
        }

        //This makes it so the text is on the screen only after a letter hs been guessed. Ideally want there
        //as soon as the page loads
        var gameStats = 
        
                '<div id = "previouslyGuessed">Previously Guessed: ' + previousGuesses + ' ' + '</div>' +    
                '<div id = "guessesRemaining">Guesses Remaining: ' + guessesRemaining + '</div>' +
                '<div id = "wins">Wins:' + wins + '</div>' +
                '<div id = "losses">Losses: ' + losses + '</div>' +
                '<div id = "gameMessage">' + gameMessage + '</div>';
        
               document.getElementById("gameText").innerHTML = gameStats;
    }


    //STOPPED HERE - REMAINING ACTIONS
        //FIGURE OUT HOW TO GET UNDERLINE TO DISPLAY, AND THEN BE REPLACED WITH VALID GUESSES
        //FIGURE OUT HOW TO GET FULL WORD TO DISPLAY IF USER LOSES
        //FIGURE HOW TO GET GAME INFO TO DISPLAY BEFORE KEY IS PRESSED
        //FIGURE OUT GAME OVER FUNCTION

        //DESIGN:
            //GET LOGO FOR EACH SEC SCHOOL - DONE
            //GET SOME BASIC INFO FOR EACH SCHOOL
            //FIGURE OUT HOW TO GET THE IMAGE AND INFO FOR SCHOOL TO BE DISPLAYED WHEN GAME IS OVER (WIN OR LOSE)
            //FONT: COLOR, SIZE, FONT FAMILY
            //GAME BACKGROUND DESIGN AND GENERAL BACKGROUND DESIGN
            //MUSIC? (BONUS)