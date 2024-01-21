const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", inputValue);

function inputValue() {
  if (nameOut.textContent !== "") {
    nameOut.textContent = nameIn.value.trim();
  } else {
    nameOut.textContent = "Anonymous";
  }
}
