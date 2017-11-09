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

    //Creates an empty array to hold the users guesses; will need to reset at the end of each game
    var previousGuesses = [];

    //Equals the number of guesses user has used; resets after each question or stops the game if reaches a certain number (0)
    var guessesRemaining = 10;

    var displayUnderline; //determine if this is necessary

    var wins = document.getElementById("wins");

    var losses = document.getElementById("losses");

    var alphabetList = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

    //In order to make the alphabet string split into an array with separate items, must use "toString" otherwise length shows as 1 instead of 26
    var alphabetArray = alphabetList.toString().split(",");

       console.log("every letter of the alphabet as a value in an array: " + alphabetArray);

    // var alphabetIndexed = indexOf Try to figure out if I can set a 
    //variable = to each character of the alphabetArray string w/o a function
    //If it requires a function, I think it would be something like
    //for (i=0; i < alphabetList.length; i++ {eachLetter = alphabetList.indexOf[i]}
                //if (userChoice !== eachLetter)
                    //break(?). Return a message to pick a valid letter?

    // A randomly chosen item from the wordBank array
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log("The word that was randomly chosen was: " + wordToGuess);

            //Determine how to get underlines for randomWord to be displayed, an ampersand for an ampersand and and space for any other 
            //character in word


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

 
    //******Make the text that is displayed show an underline for each letter in the word, 
    //an ampersand for an ampersand and and space for any other character in word

//****DEFINE FUNCTIONS -------------------------------------------------------------------------------------------

//FUNCTION 1: COMPARE FUNCTION

    //This  will compare the characters in the random word to the userGuess and take action based on if it is a match or not
        //Consider comparing the userChoice to an array of the randomword characters as an array instead of string so that 
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
                console.log("Game Over!");
            
                // Calls GameOver function Button appears that, when clicked, resets the game
                gameOver()
        
            //There are still more guesses left. Should listen for another key
            } else {
                 console.log("You have " + guessesRemaining + " guesses remaining!");
            }
        
            //There is  match
        } else { 
            console.log("It's a match! The letter " + userChoiceArg + " is in " + wordToGuessArg)            
            
            //Check if there are any letters remaining to guess
                // If all leters are guessed: 
                    //You Win, button appears that, when clicked, resets the game 
        }
       
    }   

//FUNCTION 2: GAMEOVER FUNCTION

    function gameOver () {
        //Correct word is displayed
        //Stop listening for user key
        //Button appears
        //Add click to button; 
        //when clicked, calls another function

    }
 
    // LISTEN UP FOR KEY PRESSED AND ACTIONS TO TAKE
    document.onkeyup = function (event) {
        
        // Saves the value of the key pressed to userChoice, capitalized
        var userChoice = (event.key).toUpperCase();
            console.log("the key that was pressed (capitlized) was: " + userChoice);
            //
        
            // Compares the value of userChoice (key pressed) to each item in the alphabet Array, and takes an action based on true/false
        if (alphabetArray.indexOf(userChoice) === -1) { 
            console.log("Invalid character. Please select a letter A -Z");


        } else {
            console.log("A valid letter was chosen");

            //Compare the userChoice to each item in the previousGuess array and if there is no match - unique guess; a match = this was already guessed
            if (previousGuesses.indexOf(userChoice) === -1) {
                console.log("This is a unique guess");
                //Go back and add this as a message to appear in HTML

                //Since it is unique, push the userChoice value to the end of the previousGuesses array
                previousGuesses.push(userChoice);
                console.log(previousGuesses);

                //Call a  function that compares the userChoice to the characters in the random word
                compare(userChoice, wordToGuess);

            }else {
                console.log("This was  guessed previously, guess again!");
                //Go back and add this as a message to appear in HTML
            }
            
        }
    }


  




       
 //STOPPED HERE



//     for (i = 0; i < wordToGuessLength; i++) {
//         if(userChoice = wordToGuess[i]){
            
//         }
       

//     }



//     //Empty array
//     var numberUnderlines = []; 

//         //For each index in wordToGuess: add "an underscore" or a blank into the numberUnderlines array
//     for (i = 0; i < wordToGuessLength; i++){
//         if(wordToGuess[i] !== "_")
//         numberUnderlines.push("underline");

//         else
//         numberUnderlines.push("A");      
//     } 
//     console.log(numberUnderlines)
//     //Once underline/spaces are each an item of underline array, turn it into one string
//     var wordDisplayed = numberUnderlines.join("");

//     //Set value (string) of the underline string to display in HTML
//     document.getElementById("wordDisplayed").innerHTML = numberUnderlines;
// }
  

   
    


    //Set an event to listen to the key pressed, and to set the value of the pressed key(first letter, turned into a string) = userChoice varible

    // Captures the key press, converts it to lowercase, and saves it to variable userChoice.
    
    
    //  CODEvar userChoice = String.fromCharCode(event.key).toUpperCase();

        //Compares the userguess to all of letters previously guessed (array starts empty, but then userChoice is letters added)
        //CODE if(userChoice === previousGuesses){/*Figure out how to compare userChoice to each item in previous guesses */
            //Don't do anything (or maybe play some kind of boink sound)


        //CODE }else(
            
            // CODE previousGuesses.push(userChoice)
            //Call some kind of function
         // CODE);
    

    //Need to do a test to see if the userChoice (letter pressed) is equal 1)to any letter in the wordToGuess index AND that it has not lready been guessed (on the previous guess list)
  
