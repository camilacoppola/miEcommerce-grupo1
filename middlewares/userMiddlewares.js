const {body} = require ('express-validator');
const path = require ('path');
const fs = require ('fs');


const validarUser = [ 
    body('email')
        .notEmpty() .withMessage('El email es requerido.') 
        .custom((value) =>{
            let usuarios = fs.readFileSync(path.join(__dirname, "../models/db/users.json"));
            usuarios = JSON.parse(usuarios);
            console.log(usuarios);
            let usuario = usuarios.find(usuario => usuario.email === value);
            if(usuario){
                throw new Error('Usuario existente');
            }
            return true;
        }),
    body('password1')
        .notEmpty().withMessage('La contreña es requerida.')
        .isLength({min: 8}).withMessage('La longitud minima es 8 caracteres.'),
    body('password2')
        .notEmpty().withMessage('La contreña es requerida.')
        .custom((value, {req}) =>{
            if(value !== req.body.password1){
                throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }),
];

module.exports = {validarUser};