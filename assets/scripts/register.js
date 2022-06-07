window.addEventListener("load", ()=>{
    let inputMailRegister = document.getElementById('inputEmail');
    let inputContrasenia1Register = document.getElementById('inputPW1');
    let buttonRegister = document.getElementById('buttonRegister');
    let inputContrasenia2Register = document.getElementById('inputPW2');
    const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

    function emailUsuario(mail){
        if(validacionEmail.test(mail)){
            return (true)
        }
    }

    let spanMail = inputMailRegister.nextElementSibling;
    let spanContrasenia1 = inputContrasenia1Register.nextElementSibling;
    let spanContrasenia2 = inputContrasenia2Register.nextElementSibling;

    function contrasenia1 (password){
        return (password.length >=8 )
    }

    inputMailRegister.addEventListener('input', () =>{
        inputMailRegister.value = inputMailRegister.value.trim();
        if(emailUsuario(inputMailRegister.value )){
            if(contrasenia1(inputContrasenia1Register.value)) {
                if(contrasenia1(inputContrasenia2Register.value)){
                    buttonRegister.removeAttribute('disabled');
                }
            }
            spanMail.innerHTML = ``;
            spanMail.classList.remove('errorVal');
        }else{
            buttonRegister.setAttribute('disabled',true);
            spanMail.innerHTML = `Email Incorrecto`;
            spanMail.classList.add('errorVal');
        }
    })

    inputContrasenia1Register.addEventListener('input', () => {
        inputContrasenia1Register.value = inputContrasenia1Register.value.trim();
        if(contrasenia1(inputContrasenia1Register.value)){
            if(emailUsuario(inputMailRegister.value )) {
                if(contrasenia1(inputContrasenia2Register.value)){
                    buttonRegister.removeAttribute('disabled');
                }
            }
            spanContrasenia1.innerHTML=``
            spanContrasenia1.classList.remove('errorVal')
        }else{
            buttonRegister.setAttribute('disabled',true);
            spanContrasenia1.innerHTML=`La longitud de la password debe ser minimo de 8 caracteres`
            spanContrasenia1.classList.add('errorVal')
        }
    })

    inputContrasenia2Register.addEventListener('input', () => {
        spanContrasenia2.innerHTML=``
        spanContrasenia2.classList.remove('errorVal')
        inputContrasenia2Register.value = inputContrasenia2Register.value.trim();
        if(contrasenia1(inputContrasenia1Register.value)){
            if(emailUsuario(inputMailRegister.value )) {
                if(contrasenia1(inputContrasenia2Register.value) && inputContrasenia2Register.value === inputContrasenia1Register.value){
                    buttonRegister.removeAttribute('disabled');
                }else {
                    buttonRegister.setAttribute('disabled',true);
                    spanContrasenia2.innerHTML=`Las contraseñas deben ser iguales`
                    spanContrasenia2.classList.add('errorVal')
                }
            }
        }else{
            buttonRegister.setAttribute('disabled',true);
            spanContrasenia1.innerHTML=`La longitud de la password debe ser minimo de 8 caracteres`
            spanContrasenia1.classList.add('errorVal')
        }
    })
    


})