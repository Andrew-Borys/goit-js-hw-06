const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onFontSizeChange = (e) => {
  const value = e.target.value;
  refs.text.style.fontSize = `${value}px`;
};

refs.range.addEventListener("input", onFontSizeChange);
