let counterDisplay = document.querySelector("#num-display");
let decrementBtn = document.querySelector(".decrement");
let retryBtn = document.querySelector(".retry");
let incrementBtn = document.querySelector(".increment");

let counter = 0;
counterDisplay.textContent = counter;

const decrement = () => {
  counter--;
  counterDisplay.textContent = counter;
};

const increment = () => {
  counter++;
  counterDisplay.textContent = counter;
};

const retry = () => {
  counter = 0;
  counterDisplay.textContent = counter;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
retryBtn.addEventListener("click", retry);
