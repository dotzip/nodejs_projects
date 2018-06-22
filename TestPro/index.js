var express = require('express');
var app = express()

// view engine setup 
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public')); // --- publish fodlers for access

app.get('/', (req, res) => {
    res.render('index', {title: 'Express by DotZip'}); // --- just render needful file
})

app.get('/contacts', (req, res) => {
    res.render('contacts', {title: 'Contacts'}); // --- just render needful file
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})