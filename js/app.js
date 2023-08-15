// Todos los arrays con las letras
import { bad, cafres, calamaro, dread, hugito, kePersonajes, laKonga, piojos, redondos, marioLuis, ntvg, tapari } from "./arrays.js";


const formulario = document.querySelector('#formulario');


formulario.addEventListener('click', imagenClickeada);

// verifica q imagen se selecciono
function imagenClickeada(e) {
    e.preventDefault();
    const altText = e.target.alt;
    comprobacion(altText)
}

// Valida y manda a llamar la funciion q imprime la letra
function comprobacion(imagen) {
    const i = Math.floor(Math.random() * 3)
    switch (imagen) {
        case 'bad-bunny':
            imprimirFrase(bad[i])
            break;
        case 'los-cafres':
            imprimirFrase(cafres[i])
            break;
        case 'calamaro':
            imprimirFrase(calamaro[i])
            break;
        case 'dread-mar-i':
            imprimirFrase(dread[i])
            break;
        case 'hugito-flores':
            imprimirFrase(hugito[i])
            break;
        case 'la-konga':
            imprimirFrase(laKonga[i])
            break;
        case 'ke-personajes':
            imprimirFrase(kePersonajes[i])
            break;
        case 'los-piojos':
            imprimirFrase(piojos[i])
            break;
        case 'los-redondos':
            imprimirFrase(redondos[i])
            break;
        case 'mario-luis':
            imprimirFrase(marioLuis[i])
            break;
        case 'ntvg':
            imprimirFrase(ntvg[i])
            break;
        case 'rodrigo-tapari':
            imprimirFrase(tapari[i])
            break;
        }
}

// Insertamos el el html en el cartel
function imprimirFrase(artista) { 
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = artista;    
}
