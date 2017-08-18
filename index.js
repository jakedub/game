const express = require("express"); //Express
const path = require ("path");
const session = require("express-session"); //Express Session
const app = express();
const mustache = require ("mustache");
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//styling
app.use(express.static("public"));

//random words
app.use(express.static("/usr/share/dict/words"));

//mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

//rendering to initial page. Setting home as initial site. Using index.mustache for the page.
app.get("/home", function (req,res){
  res.render("index");
})

//assign random word based on the static directory
app.post("/home", function (req,res){
  res.render("index")
})

//redirect if count is over 8. // TODO: Needs session count.
app.get("/", function(req,res){
  if (count > 7){
    res.render("home", {list of stored items?})
  }
  res.redirect("/home");
})


//local checking
app.listen(3000, function(){
  console.log("Should be working");
})
