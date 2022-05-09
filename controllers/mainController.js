const fetch = require('node-fetch');

const mainRender = async (req,res) => {

    const data = await fetch('https://dhfakestore.herokuapp.com/api/products/suggested');
    const suggestedProducts = await data.json()

    res.render('index', {suggestedProducts: suggestedProducts.slice(0, 4)});
}


module.exports = {
    mainRender
}