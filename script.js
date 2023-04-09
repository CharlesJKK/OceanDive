//Menu dropdown
const dropdown = document.querySelector('.dropdown');

const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected')

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open')
})

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked')
        caret.classList.remove('caret-rotate')
        menu.classList.remove('menu-open')

        options.forEach(option => {
            option.classList.remove('active')
        })
    })
})

//carousel
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()

    if(currentSlide === slider.length - 1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    
    showSlider()
}

function prevSlider(){
    hideSlider()

    if(currentSlide === 0){
        currentSlide = slider.length -1;
    }else{
        currentSlide--
    }

    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)