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
            cambiarTitulo('Bad Bunny');
            break;
        case 'los-cafres':
            imprimirFrase(cafres[i])
            cambiarTitulo('Los cafres');
            break;
        case 'calamaro':
            imprimirFrase(calamaro[i])
            cambiarTitulo('Andres Calamaro');
            break;
        case 'dread-mar-i':
            imprimirFrase(dread[i])
            cambiarTitulo('Dread Mar I');
            break;
        case 'hugito-flores':
            imprimirFrase(hugito[i])
            cambiarTitulo('Huguito Flores');
            break;
        case 'la-konga':
            imprimirFrase(laKonga[i])
            cambiarTitulo('La konga');
            break;
        case 'ke-personajes':
            imprimirFrase(kePersonajes[i])
            cambiarTitulo('Ke Personajes');
            break;
        case 'los-piojos':
            imprimirFrase(piojos[i])
            cambiarTitulo('Los Piojos');
            break;
        case 'los-redondos':
            imprimirFrase(redondos[i])
            cambiarTitulo('Los Redondos');
            break;
        case 'mario-luis':
            imprimirFrase(marioLuis[i])
            cambiarTitulo('Mario Luis');
            break;
        case 'ntvg':
            imprimirFrase(ntvg[i])
            cambiarTitulo('No te va a Gustar');
            break;
        case 'rodrigo-tapari':
            imprimirFrase(tapari[i])
            cambiarTitulo('Rodrigo Tapari');
            break;
        }
}

// Insertamos el el html en el cartel
function imprimirFrase(artista) { 
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = artista;    
}

// Titulo de la frase
function cambiarTitulo(artista) {
    const titulo = document.querySelector('#exampleModalLabel');
    titulo.innerHTML = artista;
}
