const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {

    const ingredientsItemEl = document.createElement('li');
    ingredientsItemEl.textContent = ingredient;
    
    return ingredientsItemEl;
});

listEl.append(...elements);
  




