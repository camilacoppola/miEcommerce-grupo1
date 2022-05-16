// import {crearAlerta, prevenirScroll} from './alerta.js'

window.addEventListener('load', () =>{
    let buttonPagar = document.getElementById('buttonPagar');
    if (buttonPagar !== null){
        crearAlerta(buttonPagar, 'Error', 'La página a la que intentas ingresar, no está disponible de momento', '¡Entiendo!');
    }
})