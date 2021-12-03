const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const makeIngredietsList = (elementList) => {
  return elementList.map((ingredientName) => {
    const ingredItemRef = document.createElement("li");
    ingredItemRef.textContent = ingredientName;
    ingredItemRef.classList.add("item");

    return ingredItemRef;
  });
};

const ingredientsList = makeIngredietsList(ingredients);
ingredientsRef.append(...ingredientsList);
