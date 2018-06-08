var express = require('express');
var app = express()
 
// view engine setup
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(require('ejs-yield'))

app.get('/', (req, res) => {
    res.layout('index', {title: 'Express by DotZip'});
})

app.get('/contacts', (req, res) => {
    res.layout('contacts', {title: 'Contacts'});
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})