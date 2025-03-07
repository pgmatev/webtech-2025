// document.getElementById, getElementByClass, querySelector
// createElement, appendChild, removeChild ...

let sum = 0;
const buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonValue = buttons[i].value;
    sum = sum + Number(buttonValue);
    document.getElementById("result").textContent = sum;
  });
}
