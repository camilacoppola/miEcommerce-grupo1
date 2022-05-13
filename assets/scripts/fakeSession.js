
document.addEventListener('DOMContentLoaded', () => {
    let encuentra = localStorage.getItem("logged");

    if(encuentra === null || encuentra === false){
            location.replace("/users/login");
    }

    document.getElementById("botonDesloggear").addEventListener('click', () => {
        if(encuentra){
            localStorage.removeItem("logged");
            location.replace("/users/login");
        }
    })
});