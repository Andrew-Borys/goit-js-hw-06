const listOfcategories = document.querySelector("#categories");
console.log("Number of categories: ", listOfcategories.children.length);

console.log(
  "Category: ",
  listOfcategories.firstElementChild.childNodes[1].textContent
);
console.log(
  "Elements: ",
  listOfcategories.firstElementChild.childNodes[3].children.length
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
  listOfcategories.lastElementChild.childNodes[1].textContent
);
console.log(
  "Elements: ",
  listOfcategories.lastElementChild.childNodes[3].children.length
);
