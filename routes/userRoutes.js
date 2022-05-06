const router = require('express').Router()

const {loginValidacion,registerValidacion,registerRender,loginRender} = require('../controllers/userController')

//render.
router.get('/login', loginRender)
//validacion de los datos ingresados.
router.post('/login', loginValidacion)


//render del registro.
router.get('/register', registerRender)
//validacion de los datos ingresados en el registro.
router.post('/register', registerValidacion)

module.exports = router