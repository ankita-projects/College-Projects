function randomNum(max) {
  let randomNumber = Math.round(Math.random() * max);
  return randomNumber;
}

function generateRandomNum(howMany, max) {
  let counter = 0;
  let listOfRandomNum = [];
  for (let index = 0; index < howMany; index++) {
    listOfRandomNum.push(randomNum(max));
  }
  return listOfRandomNum;
}

function isJackpotWon(numArray) {
  let counter = 0;
  let zeroCounter = 0;
  let oneCounter = 0;
  while (counter < 5) {
    if (numArray[counter] == 0) {
      zeroCounter++;
    }
    if (numArray[counter] == 1) {
      oneCounter++;
    }
    counter++;
  }
  if (oneCounter == 5) {
    console.log("Congrats you are Jackpot winner");
    return true;
  }
  return false;
}
function turnsToWinJackpot(ticketSize, ticketRange) {
  let counter = 0;
  while (true) {
    let randomArray = generateRandomNum(ticketSize,ticketRange);
    counter++;
    if (isJackpotWon(randomArray)) {
      console.log("It took " + counter +" turns to win Jackpot");
      break;
    }
  }
  return counter;
}
let totalCostToWin=0;
for (let index = 0; index < 5; index++) {
    let turnsToWin = turnsToWinJackpot(5,5);
    let costToWin = turnsToWin*0.5;
    totalCostToWin=totalCostToWin+costToWin;
    console.log("You have paid "+ costToWin +" Eur to win");
}
console.log("Average cost to win " + totalCostToWin/5); 
console.log("If the jackpot prize was 30000 EUR, on an average your profit will be " + (30000-(totalCostToWin/5)) + " EUR");

