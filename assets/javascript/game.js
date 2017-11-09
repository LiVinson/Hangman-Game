//DECLARE VARIABLES

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
                //if (userGuess !== eachLetter)
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

// LISTEN UP FOR KEY PRESSED AND ACTIONS TO TAKE
    document.onkeyup = function (event) {
        
        // Saves the value of the key pressed to userChoice, capitalized
        var userChoice = (event.key).toUpperCase();
            console.log("the key that was pressed (capitlized) was: " + userChoice);
        
        if (alphabetArray.indexOf(userChoice) === -1) { 
            console.log("Invalid character. Please select a letter A -Z");

        } else {
            console.log("A valid letter was chosen");
        }
    }

            
        //Test if the letter pressed = A -Z
            //If true: compare it to each character in the previousGUesses array
                //If a match: do nothing, (display message)
                //If not a match, call a function
            
            //If false, do nothing (display message)
  




       
 //STOPPED HERE



//     for (i = 0; i < wordToGuessLength; i++) {
//         if(userGuess = wordToGuess[i]){
            
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
  

   
    


    //Set an event to listen to the key pressed, and to set the value of the pressed key(first letter, turned into a string) = userGuess varible

    // Captures the key press, converts it to lowercase, and saves it to variable userGuess.
    
    
    //  CODEvar userGuess = String.fromCharCode(event.key).toUpperCase();

        //Compares the userguess to all of letters previously guessed (array starts empty, but then userGuess is letters added)
        //CODE if(userGuess === previousGuesses){/*Figure out how to compare userGuess to each item in previous guesses */
            //Don't do anything (or maybe play some kind of boink sound)


        //CODE }else(
            
            // CODE previousGuesses.push(userGuess)
            //Call some kind of function
         // CODE);
    

    //Need to do a test to see if the userGuess (letter pressed) is equal 1)to any letter in the wordToGuess index AND that it has not lready been guessed (on the previous guess list)
  
