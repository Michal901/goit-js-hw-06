const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

function fontChecker() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("input", fontChecker);
