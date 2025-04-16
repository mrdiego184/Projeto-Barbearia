window.location.hash = '.inicio';
const myObserver= new IntersectionObserver ((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach( (elemento) => myObserver.observe(elemento))
