const fs = require ('fs');
const {validationResult} = require ('express-validator');
const path = require ('path');

const loginValidacion = (req,res) => {
res.redirect("/");
}

const loginRender = (req,res) => {
    res.render("login")
}

const registerRender = (req,res) => {
    res.render("register", {errors:[]});
}
const registerValidacion = (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.mapped());
        return res.render("register",{errors:errors.mapped()}) //error indicando el porque,
    }
    let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../models/db/users.json')))
    usuarios.push(req.body)
    fs.writeFileSync(path.join(__dirname,'../models/db/users.json'), JSON.stringify(usuarios))
    return res.redirect('/')
}

module.exports = {
    loginRender,
    registerRender,
    loginValidacion,
    registerValidacion
}