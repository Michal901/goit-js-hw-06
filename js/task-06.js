const validationInput = document.querySelector("#validation-input");

function handleValidation() {
  const isValidLength =
    validationInput.value.length === Number(validationInput.dataset.length);

  if (isValidLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", handleValidation);
