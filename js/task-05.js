const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  // if (inputRef.value === "") {
  //   outputRef.textContent = "Anonymous";
  // } else outputRef.textContent = event.currentTarget.value;
  inputRef.value === ""
    ? (outputRef.textContent = "Anonymous")
    : (outputRef.textContent = event.currentTarget.value);
}
