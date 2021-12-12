const listOfcategories = document.querySelector("#categories");
console.log("Number of categories: ", listOfcategories.children.length);

console.log(
  "Category: ",
  listOfcategories.children[0].childNodes[1].textContent
);
console.log(
  "Elements: ",
  listOfcategories.children[0].childNodes[3].children.length
);

console.log(
  "Category: ",
  listOfcategories.children[1].childNodes[1].textContent
);
console.log(
  "Elements: ",
  listOfcategories.children[1].childNodes[3].children.length
);

console.log(
  "Category: ",
  listOfcategories.children[2].childNodes[1].textContent
);
console.log(
  "Elements: ",
  listOfcategories.children[2].childNodes[3].children.length
);
