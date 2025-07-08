// script para que as sections apareçam na página quando entrarem no campo de visão da tela.
window.location.hash = '.inicio';
const myObserver= new IntersectionObserver ((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach( (elemento) => myObserver.observe(elemento))

// popup das assinaturas (ficará no site por um tempo, durante o lançamento do plano das assinaturas da barbearia)

let popup = document.querySelector("#popup")

let fechar = document.querySelector("#fechar")
let assinar = document.querySelector("#assinaraba")

function mostrarPopup (){
    popup.style.display = "flex";
}
function fecharPopup () {
    popup.style.display = "none";
    
}


assinar.addEventListener("click",fecharPopup)
fechar.addEventListener ("click", fecharPopup)


window.onload = mostrarPopup;
