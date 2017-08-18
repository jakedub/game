const express = require("express"); //Express
const path = require ("path");
const session = require("express-session"); //Express Session
const app = express();
const mustache = require ("mustache");
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
