const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputCheck);

function onInputCheck(e) {
  const inputLength = e.currentTarget.value.length;

  // if (inputLength === Number(inputRef.dataset.length)) {
  //   inputRef.classList.add("valid");
  // } else {
  //   inputRef.classList.add("invalid");
  // }

  inputLength === Number(inputRef.dataset.length)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
