const prompt = require('prompt-sync')();
let num = prompt('Enter a number: ');
num = parseInt(num);
for(let i = 1; i<=num; i++){
    let row="";
    for(let j=1; j<=5; j++){
        if(j === 1){
            row += 1*i+'\t';
            continue;

        }else if(j === 2){
            row += i*2+'\t';
            continue;
        }else if(j === 3){
            row += 3*i+'\t';
            continue;
        }else if(j === 4){
            row += i*i+'\t';
            continue;

        }else if(j === 5){
            row += i*i*i+'\t';
            

        }
           
        
        
    
    }
    console.log(row);
    }
    
    
