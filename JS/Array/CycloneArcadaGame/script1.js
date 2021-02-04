const NumberOfBulb = 60;
const Delay = 500;
let winningBulbIndex;
let selectedIndex;
let intervalId;

let counter = 0;
let arrayOfBulbs = [];
function bulbClick(event) {
  event.target.classList.add("chosen");
  selectedIndex = parseInt(event.target.id);
}

// creating bulbs
while (counter < NumberOfBulb) {
  const newEle = document.createElement("div");
  newEle.id = counter;
  newEle.className = "bulb";
  newEle.addEventListener("click", bulbClick);
  document.getElementById("bulb").appendChild(newEle);

  arrayOfBulbs.push(false);

  counter++;
}

//reset the counter back to the first bulb
counter = 0;
arrayOfBulbs[counter] = true;
document.getElementsByClassName("bulb")[counter].classList.add("active");

const arrangeBulbsInACircle = (nodes) => {
  const radius = "12em",
    start = -90,
    $els = [...nodes], // turn nodelist into a real array
    numberOfEls = $els.length,
    slice = 360 / numberOfEls;

  $els.forEach((el, index) => {
    const rotate = slice * index + start;
    const rotateReverse = rotate * -1;
    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};

// invoke the fn on the class bulb elements to create the effect
arrangeBulbsInACircle(document.getElementsByClassName("bulb"));

document.getElementById("start").addEventListener("click", () => {
  const blinkingSpeed = document.getElementById("speed").value
    ? document.getElementById("speed").value
    : Delay;

  intervalId = setInterval(() => {
    //switch off the current bulb
    arrayOfBulbs[counter] = false;
    document.getElementById(counter).classList.remove("active");

    //unless it is already the last bulb
    if (counter < NumberOfBulb - 1) {
      counter++; //get the next bulb in the array
    } else {
      counter = 0; // reset
    }
    arrayOfBulbs[counter] = true;
    document.getElementById(counter).classList.add("active");
    winningBulbIndex = counter;

    console.clear();
    console.log(arrayOfBulbs);
  }, blinkingSpeed);

  document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(intervalId);
    if (selectedIndex == winningBulbIndex) {
      alert("You won the game");
    } else alert("You lost");
  });
});
