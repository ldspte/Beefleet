const inicio = document.querySelector('#button1');
const registro = document.querySelector('#button2');
const fondo = document.querySelector('#fondo');
const signin1 = document.querySelector('#signin1');
const signup1 = document.querySelector('#signup1');


inicio.addEventListener('click', pasarinicio => {
    fondo.classList.toggle('fondo2');
    signup1.classList.toggle('signup2');
    signin1.classList.toggle('signin2');
})


registro.addEventListener('click' , pasar_registro => {
    fondo.classList.toggle('fondo2');
    signin1.classList.toggle('signin2');
    signup1.classList.toggle('signup2');
})