const refs = {
    valueInput: document.querySelector('input'),
    render: document.querySelector('[data-action="render"]'),
    clear: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.render.addEventListener('click', createBoxes);
refs.clear.addEventListener('click', destroyBoxes);

const randomColor = (min, max) =>
 Math.round(Math.random() * (max - min) + min);

function createBoxes() {
    const amount = Number(refs.valueInput.value);
    const arrayEl = [];

    for (let i = 0; i < amount; i += 1){

        const createDivEl = document.createElement('div');
        createDivEl.style.backgroundColor = `RGB(
            ${randomColor(0, 255)},
            ${randomColor(0, 255)},
            ${randomColor(0, 255)})`;
        createDivEl.style.width = `${30 + i * 10}px`;
        createDivEl.style.height = `${30 + i * 10}px`;

     arrayEl.push(createDivEl);
    }
     refs.boxes.append(...arrayEl);
 };

function destroyBoxes() {
    refs.valueInput.value = '';
    refs.boxes.innerHTML = '';
};
