var express = require('express');
var app = express.Router();

Module.exports = app

.use(function(req, res, next){
    res.write('This is testing use method');
    next(); //demonstrates use method
})
.get('/hello', function (req, res) {
  res.write(' world') //when we listen and open the link http://localhost:8080/hello we can see the message world
  res.end();
})

.get('/goodbye', function (req, res) {
    res.write('new paltz')//when we listen and open the link http://localhost:8080/goodbye we can see the message new paltz
    res.end();
  })
