const fetch = require('node-fetch');

const mainRender = async (req,res) => {

    const data = await fetch('https://dhfakestore.herokuapp.com/api/products/suggested');
    const suggestedProducts = await data.json()

    let mostWantedProducts = await fetch('https://dhfakestore.herokuapp.com/api/products/mostwanted');
    mostWantedProducts = await mostWantedProducts.json();

    let loggeado = req.app.get('user');

    console.log(loggeado);
    res.render('index', {sesionLogeada: loggeado, suggestedProducts: suggestedProducts.slice(0, 4), mostWantedProducts: mostWantedProducts.slice(0, 8)});
    req.app.set('user',false);
}

module.exports = {
    mainRender
}