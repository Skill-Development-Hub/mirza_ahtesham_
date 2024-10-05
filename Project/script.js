
const express = require('express')
const app = express()

app.set("view engine", "ejs");  

app.use(express.static('./public'));

app.use(function (req, res, next){
    console.log('salam');
    next();
});

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/contact', function(req, res){
    res.render("contact");
})




app.listen(3000)