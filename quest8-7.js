let t1 = 0;
let t2 = 1;
let nextTerm = 0;
t1 = parseInt(t1);
t2 = parseInt(t2);
nextTerm = parseInt(nextTerm);
for(let i = 1; i <= 5; i++){
    if(i === 1){
        console.log(t1);
        continue;
    }
    if(i === 2){
        console.log(t2);
        continue;
    }
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
    console.log(nextTerm);

}