window.addEventListener('load', () =>{
    let botonesImagenes = document.querySelectorAll(".imagenesChicas button");
    let imagenGrande = document.querySelector(".imagenPrincipal img");
    let botonActualSeleccionado = null;

    //Poner imagen principal genérica si no tiene src
    if(imagenGrande.getAttribute('src') !== "" || botonesImagenes.length > 1){
        imagenGrande.setAttribute('src', botonesImagenes[0].querySelector("img").getAttribute('src'));
    } else{
        imagenGrande.setAttribute('src', '/img/imagenUndefined.png')
        botonesImagenes[0].querySelector("img").setAttribute('src', '/img/imagenUndefined.png')
    }

    //Seleccionar primera imágen como default
    botonesImagenes[0].classList.add('imagen_seleccionada');
    botonActualSeleccionado = botonesImagenes[0];

    //Seleccionador de imágenes <%=producto.image%>
    botonesImagenes.forEach(botonImg => {
        botonImg.addEventListener('click', () => {
            if(botonImg !== botonActualSeleccionado){
                imagenGrande.setAttribute('src', botonImg.querySelector("img").getAttribute('src'));
                botonImg.classList.add("imagen_seleccionada");
                if(botonActualSeleccionado !== null) botonActualSeleccionado.classList.remove('imagen_seleccionada');
                botonActualSeleccionado = botonImg;
            }
        })
    })
})