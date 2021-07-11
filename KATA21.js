
let answer = prompt("Guess a number: ");

function guessnumber(){
    randomnum=Math.floor(Math.random())

    if (answer>randomnum){
        console.log("this is too high")
    }
    else if (answer<randomnum){
        console.log("this is too loww")
    }
    else if (answer===randomnum){
        console.log("You got it! ")
    }

    else if (typeof(answer)!== typeof(randomnum)){
        console.log("Not a number! Try again!")

    }
} 

console.log("You answered: " + answer + ", the Random number is " + randomnum);
console.log(guessnumber())