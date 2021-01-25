const numInEnglish = require('num-to-words');        //import library numtoword
const inFinnish= require('numerot');                 //import library numerot

let generatedNo = Math.floor(Math.random() * 1001);  
console.log(generatedNo)
const convertedNum=numInEnglish.numToWords(generatedNo);   //numInEnglish represents module..azxdqerw module.method(Input) Import module in the variable
console.log(convertedNum);
const numberInFinnish = inFinnish(generatedNo);
console.log(numberInFinnish);

