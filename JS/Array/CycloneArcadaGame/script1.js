const NumberOfBulb = 20;
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
document.getElementById("stop-btn").addEventListener("click", () => {
  clearInterval(intervalId);
  if(selectedIndex == winningBulbIndex){
      alert("You won the game")
}
else
     alert("You lost")
});

intervalId = setInterval(() => {
  //switch off the current bulb
  arrayOfBulbs[counter] = false;
  document.getElementsByClassName("bulb")[counter].classList.remove("active");

  //unless it is already the last bulb
  if (counter < NumberOfBulb - 1) {
    counter++; //get the next bulb in the array
  } else {
    counter = 0; // reset
  }
  arrayOfBulbs[counter] = true;
  document.getElementsByClassName("bulb")[counter].classList.add("active");
  winningBulbIndex = counter;

  console.clear();
  console.log(arrayOfBulbs);
}, Delay);
