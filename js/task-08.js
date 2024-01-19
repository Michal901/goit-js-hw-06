const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  //   const formData = {};
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All fields must be filled in!");
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset();
}
