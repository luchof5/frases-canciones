import { bad } from "./arrays.js";

const formulario = document.querySelector('#formulario');


formulario.addEventListener('click', imagenClickeada);


function imagenClickeada(e) {
    e.preventDefault();
    const altText = e.target.alt;
    console.log(`Imagen clickeada: ${altText}`);
    comprobacion(altText)
}

function comprobacion(imagen) {
    if (imagen === 'bad-bunny') {
        console.log(bad);
    }
}

