const refs = {
  increment: document.querySelector(`[data-action="increment"]`),
  decrement: document.querySelector(`[data-action="decrement"]`),
  value: document.querySelector("#value"),
};

let counterValue = 0;

const changeValue = (step) => {
  counterValue += step;

  refs.value.textContent = counterValue;
};

refs.decrement.addEventListener("click", () => changeValue(-1));
refs.increment.addEventListener("click", () => changeValue(+1));
