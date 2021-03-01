const open = document.querySelector('.open');

const close = document.querySelector('.close');

const show = document.querySelector('.secondary-nav-wrapper');

const wrapper = document.querySelector('.body-wrapper');

const standard = document.querySelector('.standard');

const inquiry = document.querySelector('.inquiry');

const premium = document.querySelector('.premium');

const price1 = document.querySelector('.grid-item-1');

const price2 = document.querySelector('.grid-item-2');

const price3 = document.querySelector('.grid-item-3');

const sliderItem1 = document.querySelector('.slider-item-1');
const sliderItem2 = document.querySelector('.slider-item-2');
const sliderItem3 = document.querySelector('.slider-item-3');

//ressponsive navigation section

open.addEventListener('click', () => {
    show.style.display = "block";
});

close.addEventListener('click', ()=>{
    show.style.display = "none";
});

//end of responsive navigation section

//start of slider for pricing section in  credit repair

standard.addEventListener('click', ()=>{
    price1.style.display = "block";
    price2.style.display = "none";
    price3.style.display = "none";
    sliderItem1.classList.add('slider-item-active');
    sliderItem2.classList.remove('slider-item-active');
    sliderItem3.classList.remove('slider-item-active');
});

inquiry.addEventListener('click', ()=>{
    price2.style.display = "block";
    price1.style.display = "none";
    price3.style.display = "none";
    sliderItem2.classList.add('slider-item-active');
    sliderItem1.classList.remove('slider-item-active');
    sliderItem3.classList.remove('slider-item-active');
});

premium.addEventListener('click', ()=>{
    price3.style.display = "block";
    price1.style.display = "none";
    price2.style.display = "none";
    sliderItem3.classList.add('slider-item-active');
    sliderItem1.classList.remove('slider-item-active');
    sliderItem2.classList.remove('slider-item-active');
});