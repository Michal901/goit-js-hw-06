const addBtn = document.querySelector('button[data-action="increment"]');
const subtractBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.getElementById("value");
let currentValue = 0;

function update() {
  counterValue.textContent = currentValue;
}
function addNumber() {
  currentValue++;
  update();
}
function subtractNumber() {
  currentValue--;
  update();
}

addBtn.addEventListener("click", addNumber);
subtractBtn.addEventListener("click", subtractNumber);
