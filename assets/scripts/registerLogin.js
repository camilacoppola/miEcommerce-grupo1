function darkModePrimeraVez() {
    if (localStorage.getItem("darkMode")) {
      let darkMode = localStorage.getItem("darkMode");
      if (darkMode === "enabled") {
        console.log("entrro prrimera vezzz enabled");
        document.querySelector('body').classList.add('dark-mode')
        //cambiar los colores a claro
        // document.documentElement.style.setProperty("--colorBlanco", mlColorGris);
        // document.documentElement.style.setProperty("--colorBlancoHeader", mlColorBlanco); 
      } else {
          document.querySelector('body').classList.remove('dark-mode')
      }
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  }

window.addEventListener('load', (e) => {
    darkModePrimeraVez();
})