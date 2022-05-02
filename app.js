const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* Ruta al index */
app.get('/', (req, res) => {
    res.render('index');
});

/* Ruta al login */
app.get('/login', (req, res) => {
    res.render('login');
});

/* Ruta al product */
app.get('/products', (req, res) => {
    res.render('product');
});

/* Ruta al cart */
app.get('/cart', (req, res) => {
    res.render('cart');
});

/* Ruta al checkout */
app.get('/checkout', (req, res) => {
    res.render('checkout');
});

/* Ruta al register */
app.get('/register', (req, res) => {
    res.render('register');
});


app.listen(PORT, () =>{
    console.log('Servidor Levantado');
})



