window.addEventListener('load', () => {
    let formulario = document.querySelector('.formulario');
    let inputUsuario = document.getElementById('user');
    let inputContrasenia = document.getElementById('password');
    let inputCheck = document.getElementById("mantenerUsuario");
    let buttonIniciarSesion = document.getElementById('buttonIniciarSesion');
    const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    mantenerInputUsuario();
        
    function emailCompleto(mail) {
    if (validacionEmail.test(mail)){
        return (true)
    }
}
    
    let spanUsuario = inputUsuario.nextElementSibling
    let spanContrasenia = inputContrasenia.nextElementSibling
    function passwordCompleta(password) {
        return (password.length >= 8)
    }
    
    inputUsuario.addEventListener('input', () => {
        inputUsuario.value = inputUsuario.value.trim();
        if(emailCompleto(inputUsuario.value)){
            if(passwordCompleta(inputContrasenia.value)) {
                buttonIniciarSesion.removeAttribute('disabled')
            }
            spanUsuario.innerHTML=``
            spanUsuario.classList.remove('errorVal')
        }else{
            buttonIniciarSesion.setAttribute('disabled',true);
            spanUsuario.innerHTML=`Email Incorrecto`
            spanUsuario.classList.add('errorVal')
        }
    })

    inputContrasenia.addEventListener('input', () => {
        inputContrasenia.value = inputContrasenia.value.trim();
        if(passwordCompleta(inputContrasenia.value)){
            if(emailCompleto(inputUsuario.value)){
                buttonIniciarSesion.removeAttribute('disabled')
            }
            spanContrasenia.innerHTML=``
            spanContrasenia.classList.remove('errorVal')
        }else{
            buttonIniciarSesion.setAttribute('disabled',true);
            spanContrasenia.innerHTML=`La longitud de la password debe ser minimo de 8 caracteres`
            spanContrasenia.classList.add('errorVal')
        }
    })

    formulario.addEventListener('submit', () => {
        if(inputCheck.checked){
            localStorage.setItem('mantenerUsuario', inputUsuario.value);
        }else{
            localStorage.removeItem('mantenerUsuario');
        }
    })

    function mantenerInputUsuario(){
        let userValue = localStorage.getItem('mantenerUsuario');   
        if(userValue){
            inputUsuario.value = userValue;
        }
    }
})