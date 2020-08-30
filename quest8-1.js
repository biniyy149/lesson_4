const prompt = require('prompt-sync')();

let num;
let sum = 0;
num = parseInt(prompt('enter number: '));
do{
   // num = parseInt(prompt('enter number: '));
    let digit = num%10;
    //sum = sum * 10 + digit;
    num = Math.floor(num/10);

}while( num > 0);
console.log(sum);