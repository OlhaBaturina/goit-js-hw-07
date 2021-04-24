let counterValue = 0;

const refs = {
value: document.querySelector('#value'),
increment: document.querySelector('[data-action="increment"]'),
decrement: document.querySelector('[data-action="decrement"]'),
};

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);

function onIncrement(event) {
    if (event.currentTarget) {
        counterValue += 1;
    }
    return refs.value.textContent = counterValue;
}

function onDecrement(event) {
      if (event.currentTarget) {
        counterValue -= 1;
    }
    return refs.value.textContent = counterValue;
}