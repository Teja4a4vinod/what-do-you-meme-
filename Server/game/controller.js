var express = require('express')
var Game = require( './model');

var app = express.Router();
var game = new Game();

module.exports =
    app.get('/quotes', (req, res) => res.send(Game.GetQuotes()) )
    app.get('/state', (req, res) => res.send(game) )
    app.post('/Picture', (req, res) => res.send( game.FlipPicture()) )