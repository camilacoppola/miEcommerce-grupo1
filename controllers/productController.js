const fetch = require('node-fetch');

const product = async (req,res) => {
//     let myPromise = new Promise (function(myResolve, myReject){
//         fetch('https://dhfakestore.herokuapp.com/api/products/' + req.params.id)
//         .then(data => {console.log(data); return data;})
//         .then(data => myResolve(data.json()));
//         setTimeout(() => {console.log("No encuentra"); return myReject(undefined)}, 4000);
//     });
    
//     myPromise.then(
//         function(value){
//             res.render("product", {producto:value});
//         },
//         function(error){
//             res.redirect("login");
//         }
//     )
// }

    try {
        let data = await fetch('https://dhfakestore.herokuapp.com/api/products/' + req.params.id)
        data = await data.json();
        

        let suggestedProducts = await fetch('https://dhfakestore.herokuapp.com/api/products/suggested');
        suggestedProducts = await suggestedProducts.json()
        
        res.render("product", {producto:data, suggestedProducts: suggestedProducts.slice(0, 4)});
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    product
}