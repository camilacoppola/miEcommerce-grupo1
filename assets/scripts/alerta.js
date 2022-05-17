function crearAlerta(elemento, titulo, cuerpo, boton){
    /*
    Propósito: Crea una alerta, prohibe scrollear y pone un filtro negro en el fondo.
    Parámetros:
        - **elemento** será un elemento del dom al que se le atribuirá el evento para que salga el botón
        de alerta.
        - **titulo** será el string del título de la alerta.
        - **cuerpo** será el string del cuerpo de la alerta.
        - **boton** será el string del contenido para borrar la alerta.
    Comentario: Si **elemento** es vacío, suelta el evento automáticamente.
    */

    if(elemento !== null && elemento !== undefined){
        elemento.addEventListener('click', (e) => {

            function prevenirScroll(e){
                /*
                Propósito: Evita el scroll en la página.
                Parámetros:
                    - **evento** será el evento del scroll con el cual se invocará la función.
                */
                e.preventDefault();
                window.scrollTo(positionX, positionY);
            }

            e.preventDefault();

            let body = document.querySelector('body');
            let mensajeError = document.createElement('div'); 
            let filtroNegro = document.createElement('div');

            filtroNegro.classList.add('filtroNegro')
            mensajeError.classList.add('alertError');
            mensajeError.innerHTML = `<h6>${titulo}</h6><p>${cuerpo}</p><div class="errorMsjButtonContainer"><button class="buttonVerde" id="buttonAlert">${boton}</button</div>`
            body.appendChild(filtroNegro);
            body.appendChild(mensajeError);

            let positionX = window.scrollX;
            let positionY = window.scrollY;

            window.addEventListener('scroll', prevenirScroll(positionX,positionY))

            mensajeError.querySelector('#buttonAlert').addEventListener('click', ()=>{
                body.removeChild(filtroNegro);
                body.removeChild(mensajeError);
                window.removeEventListener('scroll', prevenirScroll)
            })
        })
    }else{

        function prevenirScroll(e){
            /*
            Propósito: Evita el scroll en la página.
            Parámetros:
                - **evento** será el evento del scroll con el cual se invocará la función.
            */
            e.preventDefault();
            window.scrollTo(positionX, positionY);
        }

        let mensajeError = document.createElement('div');
        let filtroNegro = document.createElement('div');
        let body = document.querySelector('body');

        filtroNegro.classList.add('filtroNegro')
        mensajeError.classList.add('alertError');
        mensajeError.innerHTML = `<h6>${titulo}</h6><p>${cuerpo}</p><div class="errorMsjButtonContainer"><button class="buttonVerde" id="buttonAlert">${boton}</button</div>`
        body.appendChild(filtroNegro);
        body.appendChild(mensajeError);

        let positionX = window.scrollX;
        let positionY = window.scrollY;

        window.addEventListener('scroll', prevenirScroll(positionX,positionY))

        mensajeError.querySelector('#buttonAlert').addEventListener('click', ()=>{
            body.removeChild(filtroNegro);
            body.removeChild(mensajeError);
            window.removeEventListener('scroll', prevenirScroll)
        })
    }

}
