let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore')
let slider = document.querySelector('.slider');
let listHTML = document.querySelector('.slider .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    slider.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.slider .list .item')
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        slider.classList.add('next')
    } else{
         positionLast = items.length -1;
         listHTML.prepend(items[positionLast]);
         slider.classList.add('prev')
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1000);
}
seeMoreButton.forEach(button => {
    button.onclick = function(){ 
        slider.classList.add('showDetail'); 
    }
});
backButton.onclick = function(){
    slider.classList.remove('showDetail');
}
