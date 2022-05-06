const router = require('express').Router()

const {carrito} = require('../controllers/carritoController')
const {product} = require('../controllers/productController')
const {mainRender} = require('../controllers/mainController')
const { checkout } = require('../controllers/checkoutController')

router.get("/", mainRender)

router.get("/product/:id", product)

router.get("/cart", carrito)

router.get("/checkout", checkout)

module.exports = router