const loginValidacion = (req,res) => {

}

const registerValidacion = (req,res) => {

}

const loginRender = (req,res) => {
    res.render("login")
}

const registerRender = (req,res) => {
    res.render("register")
}



module.exports = {
    loginRender,
    registerRender,
    loginValidacion,
    registerValidacion
}