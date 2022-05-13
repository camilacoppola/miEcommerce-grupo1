import {crearAlerta, prevenirScroll} from './alerta.js'

window.addEventListener('load', () =>{
    let buttonPagar = document.getElementById('buttonPagar');

    crearAlerta(buttonPagar, 'Error de mensaje', 'aaaaaaaaaaaaaaaaaaaaaa', 'aceptar');
})