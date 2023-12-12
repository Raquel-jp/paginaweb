const menu = document.querySelector('.hamburguesa');
const nav = document.querySelector('.navegacion');



document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
})

const eventos = ()=>{
    menu.addEventListener('click', abrirMenu)
}
const abrirMenu = () => {
    nav.classList.remove('ocultar');
    botonCerrar();  
}

const botonCerrar = () => {
    const btonCerrar = document.createElement('p')
    console.log(btonCerrar)

}