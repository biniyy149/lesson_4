const prompt = require('prompt-sync')();
let message = 'Guess a number between 1 & 100: ';

let answer = 38;
let guess;
let count  = 0;
do {
    guess = parseInt(prompt(message));
    if(guess < answer){
        message = guess + ' is too low; enter another num: ';
        count++;

    }else if(guess > answer){
        message = guess + ' is too high; enter another num: ';
        count++;
    }else{
        count++;
    }

}while(guess != answer);
console.log('You got it in ',count,' trial, ','it was #'+answer);
