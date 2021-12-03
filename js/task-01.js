const listOfcategories = document.querySelector("#categories");
console.log("Number of categories: ", listOfcategories.children.length);

console.log("Category: ", listOfcategories.children[0].children[0].textContent);
console.log(
  "Elements: ",
  listOfcategories.children[0].children[1].children.length
);

console.log("Category: ", listOfcategories.children[1].children[0].textContent);
console.log(
  "Elements: ",
  listOfcategories.children[1].children[1].children.length
);

console.log("Category: ", listOfcategories.children[2].children[0].textContent);
console.log(
  "Elements: ",
  listOfcategories.children[2].children[1].children.length
);
