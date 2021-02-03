let form = document.querySelector("#form1");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("p");
let direction = document.querySelectorAll('input[name="direction"]');
const setGradient = (event) => {
  event.preventDefault();
  let selectedValue;
  for (const v of direction) {
    if (v.checked) {
      selectedValue = v.value;
    }
  }
  console.log("wow, it is actually working");
  console.log(color1.value);
  console.log(color2.value);
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  console.log(document.body.style.backgroundImage);
  text.textContent = `background-image:linear-gradient{to right, ${color1.value}, ${color2.value}};`;
};
form.addEventListener("submit", setGradient);
