
const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach((el) =>
    
    console.log(`Категория: ${el.firstElementChild.textContent}
    Количество элементов: ${el.lastElementChild.children.length}`)
);