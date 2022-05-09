const fetch = require('node-fetch');

const mainRender = async (req,res) => {

    const data = await fetch('https://dhfakestore.herokuapp.com/api/products/suggested');
    const suggestedProducts = await data.json()

    let mostWantedProducts = await fetch('https://dhfakestore.herokuapp.com/api/products/mostwanted');
    mostWantedProducts = await mostWantedProducts.json();

    res.render('index', {suggestedProducts: suggestedProducts.slice(0, 4), mostWantedProducts: mostWantedProducts.slice(0, 8)});
}


module.exports = {
    mainRender
}