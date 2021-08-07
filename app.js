const buttons = document.querySelector('.header-buttons')
const button = document.querySelector('.btn-white')
const button2 = document.querySelector('.btn-red')
const formButton = document.querySelector('.btn-black')
const form = document.querySelector('.contact-us')

window.addEventListener('scroll', animButtons)

let mainElement = document.documentElement;
let elemHeight = mainElement.clientHeight


function animButtons() {
    if (window.pageYOffset > 780) {
        buttons.classList.add('buttons-scroll')
        button.classList.add('button-scroll')
        button2.classList.add('button-scroll')
    } else {
        buttons.classList.remove('buttons-scroll')
        button.classList.remove('button-scroll')
        button2.classList.remove('button-scroll')
    }

}


formButton.addEventListener('click', function(e) {
    e.preventDefault()
    alert('form sent successfully !')
    form.classList.remove('contact-us-visible')
    form.classList.add('contact-us')
})

button2.addEventListener('click', function() {
    console.log('clicked');
    form.classList.remove('contact-us')
    form.classList.add('contact-us-visible')
})