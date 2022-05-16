window.addEventListener("load", ()=>{
    let botonImagen = document.querySelector("#botonImagenPerfil");
    let botonDesplegable = document.querySelector(".botonDesloggear");

    botonImagen.addEventListener ("click", (e)=>{
        if(botonDesplegable.classList.contains('botonDesloggearVisible') && !botonDesplegable.contains(e.target)){
            botonDesplegable.classList.remove('botonDesloggearVisible');
            botonImagen.classList.remove('buttonGrisAVerdeClickeado');
        }else{
            botonDesplegable.classList.add('botonDesloggearVisible');
            botonImagen.classList.add('buttonGrisAVerdeClickeado');
        }
    })

    document.addEventListener('click', (e) => {
        if(!botonImagen.contains(e.target) && botonDesplegable.classList.contains('botonDesloggearVisible')){
            botonDesplegable.classList.remove('botonDesloggearVisible');
            botonImagen.classList.remove('buttonGrisAVerdeClickeado');
        }
    })

})