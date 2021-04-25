const refs = {
    text: document.querySelector('#text'),
    fontSize: document.querySelector('#font-size-control'),
};

refs.fontSize.addEventListener('change', changeFontSize);

function changeFontSize(event) {
   const size = event.currentTarget.value;
    
    refs.text.style.fontSize =  size + 'px';
    }



