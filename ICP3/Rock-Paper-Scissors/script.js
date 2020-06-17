const userChoice = prompt("choose rock, paper or scissors?");   //user choice
// document.getElementById('try').innerHTML = "Hello world";
let computerChoice = Math.random();                         //computer choice
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
const compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        swal("Both matched");
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            swal("Winner!!");
        } else {
            swal("Better luck next time...");
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            swal("Winner!!");
        } else {
            // scissors wins
            swal("Better luck next time...");
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            swal("Better luck next time...");
        } else {
            // scissors wins
            swal("Winner!!");
        }
    }
}
document.write("<p>User Choice:" + " " + userChoice + "</p>");
document.write("<p>Computer Choice:" + " " + computerChoice + "</p>");
compare(userChoice,computerChoice);
