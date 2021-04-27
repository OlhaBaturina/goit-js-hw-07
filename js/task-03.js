const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("#gallery");

const makeElementMarkup = ({ url, alt }) => {
  return `
<li
class="image">
 <img
 src=${url} 
 alt=${alt}
 class="img">
 </li>
 `;
};

const elementIterateMarkup = images.map(makeElementMarkup).join("");

galleryEl.insertAdjacentHTML("afterbegin", elementIterateMarkup);

// const makeElement = (images) => {

//     const itemEl = document.createElement('li');
//     itemEl.classList.add('image');

//     const imagesEl = document.createElement('img');
//     imagesEl.src = images.url;
//     imagesEl.alt = images.alt;
//     imagesEl.width = '240';
//     imagesEl.classList.add('img');

//     itemEl.appendChild(imagesEl);
//     return itemEl;
// };

// const element = images.map(makeElement);

// galleryEl.append(...element);
