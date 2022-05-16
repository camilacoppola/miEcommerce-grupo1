window.addEventListener('load', () =>{
    let botonesImagenes = document.querySelectorAll(".imagenesChicas button");
    let imagenGrande = document.querySelector(".imagenPrincipal img");
    let botonActualSeleccionado = null;

    //Seleccionador de imágenes
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

    botonesImagenes.forEach(botonImg => {
        if (botonImg.querySelector("img").getAttribute('src') == imagenGrande.getAttribute('src')){
            botonImg.classList.add("imagen_seleccionada");
            botonActualSeleccionado = botonImg;
            return true;
        }
    })
})