
document.addEventListener('DOMContentLoaded', () => {
    let encuentra = localStorage.getItem("logged");

    if(encuentra === null || encuentra === false){
            location.replace("/users/login");
    }

    document.getElementById("botonDesloggear").addEventListener('click', () => {
        if(encuentra){
            console.log(encuentra);
            localStorage.removeItem("logged");
            console.log(localStorage.getItem("logged"));
            location.replace("/users/login");
        }
    })
});