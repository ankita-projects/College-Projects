const numToWords = require('num-to-words');
const inFinnish= require('numerot');

let generatedNo = Math.floor(Math.random() * 1001);
console.log(generatedNo)
const convertedNum=numToWords.numToWords(generatedNo);
console.log(convertedNum);
const numberInFinnish = inFinnish(generatedNo);
console.log(numberInFinnish);

