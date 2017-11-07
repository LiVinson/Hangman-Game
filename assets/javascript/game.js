//DECLARE VARIABLES

//Words that user will have to guess, randomly selected
var wordBank = ["Florida Gators",
                "Georgia Bulldogs", 
                "Tennessee Volunteers", 
                "South Carolina Gamecocks",
                "Vanderbilt Commodores",
                "Kentucky Wildcats",
                "Alabama Crimson Tide",
                "Louisiana State Tigers",
                "Ole Miss Rebels",
                "Mississippi State Bulldogs",
                "Texas A&M Aggies",
                "Auburn Tigers",
                "Arkansas Razorbacks",
                "Missouri Tigers"];

 //Creates an empty array to hold the users guesses; will need to reset at the end of each game
var previousGuesses = [];


                //Equals the number of guesses user has used; resets after each question or stops the game if reaches a certain number
var guessesRemaining = 10;

//Selects the html start button. And adds an event listening: for the user to click on the button. When this occuts, a TBD function is called
document.getElementById("startButton").addEventListener("click", startGame());


function startGame(){
    //Have the entire intro continer disappear, game container appears. (POssible to toggle?)
    
     // = A randomly chosen item from the wordBank array
    var wordToGuess = Math.floor(Math.random()*[wordBank.length]);


    //Empty array
    var numberUnderlines = []; //When a letter is guessed, it replaces the underline in the word
    var wordDisplayed = String(numberUnderlines);//make this variable = numberUnderlines as a string, and then have a paragraph display it
   
    
    //Set the number of "underscores" on display equal to the number of characters in the randomly chosen item from the array
    //For each index in wordToGuess: add "an underscore" 
    for (i = 0; i < wordToGuess.length; i++) {
        numberUnderlines.push("_");
            
    }
    
    //Set an event to listen to the key pressed, and to set the value of the pressed key(first letter, turned into a string) = userGuess varible

    // Captures the key press, converts it to lowercase, and saves it to variable userGuess.
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

        //Compares the userguess to all of letters previously guessed (array starts empty, but then userGuess is letters added)
        if(userGuess === previousGuesses){/*Figure out how to compare userGuess to each item in previous guesses */
            //Don't do anything (or maybe play some kind of boink sound)


        }else(
            
            previousGuesses.push(userGuess)
            //Call some kind of function
        );
    

    //Need to do a test to see if the userGuess (letter pressed) is equal 1)to any letter in the wordToGuess index AND that it has not lready been guessed (on the previous guess list)
  
}