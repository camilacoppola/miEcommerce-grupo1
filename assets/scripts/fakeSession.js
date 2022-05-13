
document.addEventListener('DOMContentLoaded', () => {
    let encuentra = localStorage.getItem("logged");

    if(encuentra === null || encuentra === false){
            location.replace("/users/login");
    }

    // document.querySelector(".botonDesloggear").addEventListener('click', () => {
    //     if(encuentra){
    //         localStorage.removeItem("logged");
    //         location.replace("/users/login");
    //     }
    // })
});