window.addEventListener("load", ()=>{
    let botonImagen = document.querySelector("#botonImagenPerfil");
    let botonDesplegable = document.querySelector(".botonDesloggear");

    botonImagen.addEventListener ("click", (e)=>{
        if(botonDesplegable.classList.contains('botonDesloggearVisible' && !botonImagen.contains(e.target))){
            botonDesplegable.classList.remove('botonDesloggearVisible')
        }else{
            botonDesplegable.classList.add('botonDesloggearVisible')
        }
    })

    document.addEventListener('click', (e) => {
        if(!botonImagen.contains(e.target)){
            botonDesplegable.classList.remove('botonDesloggearVisible');
        }
    })

})