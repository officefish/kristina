

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')

const numSlides = slides.length

let slideNumber = 0

nextBtn.onclick = () => {

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideNumber ++;

    if (slideNumber > (numSlides - 1)) 
    {
        slideNumber = 0
    }

    slides[slideNumber].classList.add('active')
}


prevBtn.onclick = () => {

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

    slideNumber --;

    if (slideNumber < 0) 
    {
        slideNumber = numSlides - 1
    }

    slides[slideNumber].classList.add('active')
}