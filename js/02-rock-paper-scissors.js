
function playGame() {
    "use strict";
    var num;
    var choice = "";
    var computerchoice = "";

    while (true) {

        var choice = window.prompt("Choose rock, paper or scissors to play.");

        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            window.alert("Only can you enter rock, paper or sissors here.");
            choice = window.prompt("Enter a new choice with rock, paper or scissors to play");
        }
        
        num = Math.floor(Math.random() * 3 + 1);

        if (num == 1) {
            computerchoice = "rock";
        } else if (num == 2) {
            computerchoice = "scissors";
        } else {
            computerchoice = "paper";
        } 
    
        if (choice != computerchoice) {
            break;
        }
        window.alert("It turns out as a tie, choose again");
    }
    

    if (choice == "rock") {
        if (computerchoice == "scissors") {
            window.alert ("You are the winner.");
        }else if (computerchoice == "paper") {
            window.alert ("The computer is the winner.");
        }else {
            window.alert ("You and the Computer are in a tie0.");
        }
    }
    
    if (choice == "paper") {
        if (computerchoice == "rock") {
            window.alert ("You are the winner.");
        }else if (computerchoice == "scissors") {
            window.alert ("The computer is the winner.");
        }else {
            window.alert ("You and the Computer are in a tie1.");   
        }
    } 
    
    if (choice == "scissors") {
        if (computerchoice == "paper") {
            window.alert ("You are the winner.");
        }else if (computerchoice == "rock") {
            window.alert ("The computer is the winner.");
        }else {
            window.alert ("You and the Computer are in a tie2.");
        }
    } 
}

function main() {
    "use strict";
    var playagain = "y";
    while (playagain === "y") {
        playGame();
        playagain = window.prompt("Do you want to play again? (y / n)");
    }
    window.alert("Thanks!");
}

main();