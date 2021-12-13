const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");

console.log("Number of categories: ", items.length);

items.forEach((node) => {
  const h2 = node.querySelector("h2");
  const nodeItems = node.querySelectorAll("li");
  console.log("Category: ", h2.textContent);
  console.log("Elements: ", nodeItems.length);
});
