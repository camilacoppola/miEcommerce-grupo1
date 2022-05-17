

    let encuentra = localStorage.getItem("logged");
    console.log("encuentrA: ", encuentra);
    if(encuentra == "false" || encuentra === undefined || encuentra === null){
            location.replace("/users/login");
    }