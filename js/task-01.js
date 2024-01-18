const categoriesNum = document.querySelectorAll("ul#categories ul");
const categories = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${categoriesNum.length}`);

categories.forEach((element) => {
  const liItems = element.querySelectorAll("li.item li");
  const category = element.querySelector("li.item h2").textContent;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${liItems.length}`);
});
