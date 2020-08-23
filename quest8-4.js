const prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');
num = parseInt(num);
let sum = 0;
if(num%2===0){
    for(let i = 1; i<num; i+=2 ){
        sum += i;
    }
}else{
    for(let j = 1; j<=num; j+=2){
        sum += j;
    }
}
console.log(sum);