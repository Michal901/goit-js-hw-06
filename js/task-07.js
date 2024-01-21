const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${fontSizeControl.value}px`;

function fontChecker() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("input", fontChecker);
