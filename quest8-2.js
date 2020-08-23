const prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');
let phrase = prompt('Enter a phrase: ');
num = parseInt(num);
for(let i = 0; i < num; i++){
    console.log(phrase);
}