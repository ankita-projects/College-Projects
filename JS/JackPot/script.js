function jackPot() {
  let randomNumList = [];
  let winningCombination = [1, 1, 1, 1, 1];
  let losingCombination = [0, 0, 0, 0, 0];
  let winningProbability = 1 / Math.pow(2, 5);
  for (i = 0; i < 5; i++) {
    randomNumList.push(Math.random() >= 0.5 ? 1 : 0);
  }

  if (randomNumList == winningCombination) {
    console.log("Congrats, You are winner");

    console.log("Winning probability is " + winningProbability);
  } else if (randomNumList == losingCombination) {
    console.log("Congrats, but you didn't win anything");
  } else {
    console.log(
      "Sorry, you lost you got this " +
        randomNumList +
        "But the winning combination is " +
        winningCombination +
        "And the probability of winning is " +
        winningProbability
    );
  }
}
