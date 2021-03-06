let currentPlayer = "";
let welcomeUser = document.getElementById("welcomeUser");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("gameResult");
let gameover = document.getElementById("displayScore");
let close = document.getElementById("close");

let hitCount = 0; //counter intialized to 0,
let missCount = 0; // miss hiting
let intervalId;
let birdCount = 0; //number of time bird appeared intialized to 0
let audio = new Audio();

const playAudio = (source, loop) => {
  //function to provide what audio file to play on start & end of game
  audio.src = source;
  audio.autoplay = true;
  audio.loop = loop;
};
let speed = 1500;
let movingCircles = () => {                         //for keep changing the bulbs in every 1 sec
                                           
  let currentActive = "";
  document.querySelectorAll(".bulb").forEach((element) => {
    if (element.style.content != "") {
      currentActive = element.id;
      currentActive = parseInt(currentActive.replace("bulb", ""));
      console.log(currentActive);
    }
    element.style.setProperty("content", ""); //hiding away all the birds
  });
  let randomNum = Math.floor(Math.random() * 4) + 1; // get random number between 1 and 4;
  if (randomNum == currentActive) {
    randomNum = randomNum == 4 ? 1 : randomNum + 1; //This is done make sure not to repeate bird to the same location
  }
  let showBirdElement = document.getElementById("bulb" + randomNum);

  showBirdElement.style.setProperty("content", "url(./image.png)");
  birdCount++;
  if (birdCount > hitCount + 3) {
    // After missed three highlighted bulbs game ends
    endGame();
    return;
  }
  if (hitCount > 4) {
    speed = speed - 500; //reducing the time interval to increase speed.
  }
  intervalId = setTimeout(movingCircles, speed);
};
const startGame = () => {
  playAudio("sounds/bonus.wav", true); //playing audio wave file on start of game(true means looping)
  document.getElementById("stop").style.display = "block"; // make stop button visible
  document.getElementById("start").style.display = "none";
  document.getElementById("playerName").style.display = "none";
  currentPlayer = document.getElementById("Name").value;
  welcomeUser.textContent = `Welcome ${currentPlayer}`;
  document.querySelectorAll(".bulb").forEach((element) => {
    // adding eventlistner for each of the bulbs
    element.addEventListener("click", checkBird);
  });

  movingCircles();
};
document.getElementById("stop").style.display = "none";
document.getElementById("start").addEventListener("click", startGame);

const checkBird = (event) => {
  //to determine source of the event(which button is clicked)
  let source = event.target || event.srcElement;
  console.log(source.style.content);
  if (source.style.content == 'url("./image.png")') {
    hitCount++;
  } else {
    endGame(); // If player clicked the wrong bulb, then game over
  }
  scoredisplay.textContent = `Your score is ${hitCount}`;
};

const endGame = () => {
  playAudio("sounds/gameOver.wav", false);
  document.getElementById("start").style.display = "block"; // Make start button visible
  document.getElementById("stop").style.display = "none"; // Hide stop button
  //clearTimeout(intervalId); // Stop timeout
  clearTimeout(intervalId); // Stop timeout
  console.log("Game over");
  overlay.style.visibility = "visible"; // Make overlay visible
  gameover.textContent = `Your score is ${hitCount} & You missed ${missCount} `; //Show score
  document.querySelectorAll(".bulb").forEach((element) => {
    // removing eventlistner for each of the bulbs
    element.removeEventListener("click", checkBird);
  });
};

const reload = () => {
  window.location.reload(); // reload page
};
close.addEventListener("click", reload); // adding event listener to close button
