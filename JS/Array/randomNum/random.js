//Generating array of 5 random numbers between 1 or 0
let playTurn = 0;
function randomNumber() {
  let list = [];
  for (let index = 0; index < 5; index++) {
    var num = Math.floor(Math.random() * 6);
    list.push(num);
  }
  return list;
}
function jackPotWinnerOrNot(list) {
  let counter = 0;
  let oneCounter = 0;
  let zeroCounter = 0;
  while (counter < list.length) {
    let numbers = list[counter];
    counter++;
    if (numbers == 0) {
      zeroCounter++;
    }
    if (numbers == 1) {
      oneCounter++;
    }
  }
  if (zeroCounter == 5) {
    console.log("Congrats");
  }
  if (oneCounter >= 3 && oneCounter <= 4) {
    console.log("You won a small prize");
  }
  if (oneCounter == 5) {
    console.log("Jackpot winner");
    return true;
  }
  return false;
}
function goForJackPot(){
    let jackPotWinnerFound = false;
    let numberOfAttempts = 0;
    while(!jackPotWinnerFound){
        numberOfAttempts ++
      let randomNumList= randomNumber();
       jackPotWinnerFound=jackPotWinnerOrNot(randomNumList);
    }

    return numberOfAttempts;
}






let totalMoney = 0; //to learn the average amount of money you have to spend on winning a jackpot
for (let index = 0; index < 9; index++) {
  jackPotCounter = 0;
  while (true) {
    let generatedList = randomNumber();

    //Checking 1 or 0 with while loop//
    let counter = 0;
    let zerocounter = 0;
    let onecounter = 0;
    while (counter < generatedList.length) {
      let numbers = generatedList[counter];
      counter++;
      if (numbers == 0) {
        zerocounter++;
      }
      if (numbers == 1) {
        onecounter++;
      }
    }
    console.log("Number of zero's in the list is " + zerocounter);
    console.log("Number of one's in the list is " + onecounter);
    if (zerocounter == 5) {
      console.log("Congrats");
    }
    if (onecounter >= 3 && onecounter <= 4) {
      console.log("You won a small prize");
    }
    if (onecounter == 5) {
      console.log("Jackpot winner");
      console.log("You won jackpot after " + jackPotCounter + "times");
      break;
    }
    jackPotCounter++;
    let amountOfMoney = 0.5 * jackPotCounter;
    console.log(amountOfMoney);
  }

  totalMoney = totalMoney + 0.5 * jackPotCounter;
}

console.log(
  "The average amount of money you will spend to hit jackpoy is " +
    totalMoney / 5
);
let profitLoss = 30000 - totalMoney;
console.log("The amount of money you get is  " + profitLoss);
