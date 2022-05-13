window.addEventListener('load', () => {
    let inputUsuario = document.getElementById('user');
    let inputContraseña = document.getElementById('password');

    inputUsuario.addEventListener('keypress', () => {
        inputUsuario.value = inputUsuario.value.trim();
    })
})