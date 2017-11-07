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
    
console.log(wordBank);
//Equals the number of guesses user has used; resets after each question or stops the game if reaches a certain number
var guesses = 0;

//Selects the html start button. And adds an event listening: for the user to click on the button. When this occuts, a TBD function is called
document.getElementById("startButton").addEventListener("click", TBD);
//Set an even to listen to the key pressed, and to set the value of the pressed key(first letter, turned into a string) = userGyess carible
