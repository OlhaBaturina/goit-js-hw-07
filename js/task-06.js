const refs = {
  input: document.querySelector("#validation-input"),
  valid: document.querySelector(".valid"),
  invalid: document.querySelector(".invalid"),
};
console.dir(refs.input);

refs.input.addEventListener("blur", onInputValue);

function onInputValue(event) {
  event.currentTarget.classList.add("invalid");
  event.currentTarget.classList.remove("valid");
  if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}
