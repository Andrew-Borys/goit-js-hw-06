function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");
// document.body.style.backgroundColor = "red";

function onColorSelect() {
  document.body.style.backgroundColor = getRandomHexColor();
}

changeColorBtnRef.addEventListener("click", onColorSelect);
