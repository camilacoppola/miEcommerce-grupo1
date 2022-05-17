const fs = require ('fs');
const {validationResult} = require ('express-validator');
const path = require ('path');

const loginValidacion = async (req,res) => {
    const errors = validationResult(req)
    console.log(errors);
    if(!errors.isEmpty()){
        return res.render("login",{errors:errors.mapped()}) //error indicando el porque,
    }
    req.app.set('user', true)
    res.redirect("/")
}

const loginRender = (req,res) => {
    res.render("login", {errors:[]})
}

const registerRender = (req,res) => {
    res.render("register", {errors:[]});
}

const registerValidacion = (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.render("register",{errors:errors.mapped()}) //error indicando el porque
    }
    req.app.set('user', true);
    let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../models/db/users.json')))
    usuarios.push(req.body)
    fs.writeFileSync(path.join(__dirname,'../models/db/users.json'), JSON.stringify(usuarios));
    res.redirect("/");
}

module.exports = {
    loginRender,
    registerRender,
    loginValidacion,
    registerValidacion
}