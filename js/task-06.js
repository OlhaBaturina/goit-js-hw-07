const refs = {
input: document.querySelector('#validation-input'),
valid: document.querySelector('.valid'),
invalid: document.querySelector('.invalid'),
};

refs.input.addEventListener('blur', onInputValue);

function onInputValue(event) {
    event.currentTarget.classList.add('invalid');
    if (event.currentTarget.value.length === 6) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    }
}


