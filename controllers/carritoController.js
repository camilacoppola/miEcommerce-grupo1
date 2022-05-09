const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const carrito = async(req,res) => {
    const {idProducto} = req.body
    let data
    try{
        data = await fetch('https://dhfakestore.herokuapp.com/api/products/' + idProducto)
        data = await data.json();
        
    }catch(err) {
        return res.send("Error 404")
    }
    let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../models/db/cart.json')))
    let productoEncontrado = productos.find(producto => producto.id == idProducto)
    if(productoEncontrado){
        productoEncontrado.cantidad+=1
    }else {
        productos.push({
            id: data._id,
            nombre: data.title,
            precio: data.price,
            imagen: data.image,
            cantidad: 1
        })
    }
    fs.writeFileSync(path.join(__dirname,'../models/db/cart.json'), JSON.stringify(productos))



    res.render("cart", {productosCarrito: productos})
}

const quitarDelCarrito = (req,res) => {
    const {idProducto} = req.body
    let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../models/db/cart.json')))
    let productoEncontrado = productos.some(producto => producto.id == idProducto)
    if(productoEncontrado) {
        productos = productos.filter(producto => producto.id !== idProducto)
        fs.writeFileSync(path.join(__dirname,'../models/db/cart.json'), JSON.stringify(productos))
    }
    res.redirect("/cart")
}

const getCarrito = (req,res) => {
    let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../models/db/cart.json')))
    res.render("cart", {productosCarrito:productos})
}

module.exports = {
    carrito,
    quitarDelCarrito,
    getCarrito
}