const open = document.querySelector('.open');
const close = document.querySelector('.close');
const show = document.querySelector('.secondary-nav-wrapper');
const wrapper = document.querySelector('.body-wrapper');

open.addEventListener('click', () => {
    show.style.display = "block";
});

close.addEventListener('click', ()=>{
    show.style.display = "none";
});


