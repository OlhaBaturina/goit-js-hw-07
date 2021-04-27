let counterValue = 0;

const refs = {
  value: document.querySelector("#value"),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

refs.decrement.addEventListener("click", onDecrement);
refs.increment.addEventListener("click", onIncrement);

function onIncrement() {
  refs.value.textContent = counterValue += 1;
}

function onDecrement() {
  refs.value.textContent = counterValue -= 1;
}
