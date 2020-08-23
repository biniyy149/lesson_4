const prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');
num = parseInt(num);
for(let i = 1; i <= num; i++){
    console.log(i);
}