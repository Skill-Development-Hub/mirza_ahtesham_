
const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static("./public"));

app.get('/', function(req, res){
  res.send("Hi")
})

app.get('/profile/:username', function(req, res){
  res.send(`Hi ${req.params.username} from profile`)
})

app.get('/food', function(req, res){
  res.render('index');
})

app.get('/contact', function(req, res){
  res.render('contact', {Person: "Mirza"});
})

app.get('/error', function(req, res){
  res.render('error')
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)