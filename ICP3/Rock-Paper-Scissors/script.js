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
        return "Both matched";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Winner!!";
        } else {
            return "Better luck next time...";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "Winner!!";
        } else {
            // scissors wins
            return "Better luck next time...";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "Better luck next time...";
        } else {
            // scissors wins
            return "Winner!!";
        }
    }
}
document.write("<p>User Choice:" + " " + userChoice + "</p>");
document.write("<p>Computer Choice:" + " " + computerChoice + "</p>");
swal(compare(userChoice,computerChoice));
