//DECLARE VARIABLES

//Words that user will have to guess, randomly selected
var wordBank = ["florida_gators",
                "georgia_bulldogs", 
                "tennessee_volunteers", 
                "south_carolina_gamecocks",
                "vanderbilt_commodores",
                "kentucky_wildcats",
                "alabama_crimson_tide",
                "louisiana_state_tigers",
                "ole_miss_rebels",
                "mississippi_state_bulldogs",
                "texas_am_aggies",
                "auburn_tigers",
                "arkansas_razorbacks",
                "missouri_tigers"];

 //Creates an empty array to hold the users guesses; will need to reset at the end of each game
var previousGuesses = [];

//Equals the number of guesses user has used; resets after each question or stops the game if reaches a certain number (0)
var guessesRemaining = 10;


document.onkeyup = function (event) {

    //Makes value of key pressed lowercase and a string. Assigns value to userGuess    
    var userGuess = (event.keycode)

     // A randomly chosen item from the wordBank array
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

        console.log(wordToGuess);
    // Sets variable to the length of the word chosen.
    var wordToGuessLength = wordToGuess.length;

    var underline = "_"
    var space = " "

        console.log(wordToGuessLength);
    //Empty array
    var numberUnderlines = []; 

        //For each index in wordToGuess: add "an underscore" or a blank into the numberUnderlines array
    for (i = 0; i < wordToGuessLength; i++){
        if(wordToGuess[i] !== "_")
        numberUnderlines.push("underline");

        else
        numberUnderlines.push("A");      
    } 
    console.log(numberUnderlines)
    //Once underline/spaces are each an item of underline array, turn it into one string
    var wordDisplayed = numberUnderlines.join("");

    //Set value (string) of the underline string to display in HTML
    document.getElementById("wordDisplayed").innerHTML = numberUnderlines;
}
  

   
    


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
  
