const {body} = require ('express-validator');
const path = require ('path');
const fs = require ('fs');


const validarUser = [
    body('email')
        .trim()
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

const validarUserLogin = [
    body('user')
        .trim()
        .notEmpty() .withMessage('El email es requerido.')
        .custom((value, {req}) =>{
            let userMail = fs.readFileSync(path.join(__dirname, "../models/db/users.json"));
            userMail = JSON.parse(userMail);
            let usersMails = userMail.find(usersMails => usersMails.email === value);
            if(!usersMails){
                throw new Error('Usuario incorrecto');
            }
            req.usuario = usersMails

            return true;
        }),

    body('password')
        .notEmpty().withMessage('La contreña es requerida.')
        .isLength({min: 8}).withMessage('La longitud minima es 8 caracteres.')
        .custom((value, {req}) =>{

            if(!req.usuario){
                if (req.usuario.password1!==value) throw new Error('Usuario incorrecto');

            }
        
            return true;
        }),
];

module.exports = {validarUser, validarUserLogin};