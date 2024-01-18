const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
let index = 0;

ingredients.forEach(() => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredients[index++];
  ingredientsList.appendChild(liElement);
});
