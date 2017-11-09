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

    var displayUnderline

    // A randomly chosen item from the wordBank array
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(wordToGuess);

    wordToGuessLength = wordToGuess.length;
    randomWordChar = "";
    wordToGuessChar = wordToGuess.split("");
    console.log(wordToGuessChar);
    
    spaceIndex = wordToGuessChar.indexOf(" ");
    if spaceIndex !== -1

        wordToGuessChar[spaceIndex] =

    for (a = 0; a < wordToGuessLength; a++){
       
        var underline = document.getElementById("underscores");
        
        randomWordChar += wordToGuess[a];
        
        
        // if (randomWordChar === wordToGuess[0])
        //     underline.innerText =  randomWordChar; 

        // else
        //     underline.innerText = underline + randomWordChar;
                  
    }

    console.log(randomWordChar);

    underline.innerText = randomWordChar;

 
    //******Make the text that is displayed show an underline for each letter in the word, 
    //an ampersand for an ampersand and and space for any other character in word

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    
    // Saves the value of the key pressed to userChoice
    var userChoice = (event.key).toUpperCase();
    console.log(userChoice);

//When the document is loaded,listen for key to be pressed. When this occurs, run a block f code
// addEventListener = function(event) {
    
//     console.log(String.fromCharCode(event.charCode));
//     //sets number of characters in the word = to a variable
//     var wordToGuessLength = wordToGuess.length;

        

    //Listen for a key to be pressed, and run an event
    // TESTING addEventListener("keypress", function(event) {

          //Makes value of key pressed lowercase and a string. Assigns value to userGuess    
        // var userGuess = (String.fromCharCode(event.charCode));
    //     console.log(userGuess);
    // ;
}
       
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
  
