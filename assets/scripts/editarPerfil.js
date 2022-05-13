

window.addEventListener("load", ()=>{
    let botonImagen = document.querySelector("#botonImagenPerfil");
    let botonDesplegable = document.querySelector(".botonDesloggear");
    botonImagen.addEventListener ("click", (e)=>{
        console.log("holas");
        botonDesplegable.classList.toggle('botonDesloggearVisible')
    })
})