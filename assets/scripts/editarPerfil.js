function darkModePrimeraVez() {
  if (localStorage.getItem("darkMode")) {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.querySelector('body').classList.add('dark-mode')
    } else {
        document.querySelector('body').classList.remove('dark-mode')
    }
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

window.addEventListener("load", () => {
    darkModePrimeraVez();

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

  botonImagen.addEventListener("click", (e) => {
    if (
      botonDesplegable.classList.contains(
        "botonDesloggearVisible" && !botonImagen.contains(e.target)
      )
    ) {
      botonDesplegable.classList.remove("botonDesloggearVisible");
    } else {
      botonDesplegable.classList.add("botonDesloggearVisible");
    }
  });

  document.addEventListener("click", (e) => {
    if (!botonImagen.contains(e.target)) {
      botonDesplegable.classList.remove("botonDesloggearVisible");
    }
  });
  let buttonModoColor = document.querySelector("#buttonModoColor");
  buttonModoColor.addEventListener("click", (e) => {
    if (localStorage.getItem("darkMode")) {
      let darkMode = localStorage.getItem("darkMode");
      if (darkMode === "enabled") {
        localStorage.setItem("darkMode", "disabled");
        document.querySelector('body').classList.remove('dark-mode')
      } else {
            localStorage.setItem("darkMode", "enabled");
            document.querySelector('body').classList.add('dark-mode')
      }
    } else {
      localStorage.setItem("darkMode", "enabled");
    }
  });
});
