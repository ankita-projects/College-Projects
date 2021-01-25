let number1=Math.round(Math.random()*2);
let number2=Math.round(Math.random()*2);
let number3=Math.round(Math.random()*2);
let number4=Math.round(Math.random()*2);
let number5=Math.round(Math.random()*2);
console.log(number1,number2,number3,number4,number5);

number1 = (number1%2===0) ? 0:1;
number2 = (number1%2===0) ? 0:1;
number3 = (number1%2===0) ? 0:1;
number4 = (number1%2===0) ? 0:1;
number5 = (number1%2===0) ? 0:1;
console.log(number1,number2,number3,number4,number5);

const sum= number1+number2+number3+number4+number5;
if(sum===5){
    console.log("Win")
    }
    else if(sum===0){
        console.log("all zeros")
    }
    else if(sum>=3){
        console.log("smaller")
    }