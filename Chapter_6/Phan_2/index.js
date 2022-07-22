const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require("path");

// use third party middleware - view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// using middleware - register public folder
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(4000, () => {
    console.log('Web starting success on port 4000');
});