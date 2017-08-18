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
app.use(expressValidator());

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

//variable for storing the randomly assigned word
const list = [{
  word: "",
  incorrect: false;
}]

//rendering to initial page. Setting home as initial site. Using index.mustache for the page.
app.get("/home", function (req,res){
  res.render("index");
})

//assign random word based on the static directory. // TODO: Need to find a way to assign a word. Then store it.
app.post("/home", function (req,res){
  if (originalUrl === "/home"){
    assign random letter.
  }
  res.render("index")
})


//get the input, match against the stored word. Using sessions likely
app.get("/", function (req,res){
  console.log("checkpoing");
  res.redirect("/home");
});

//redirect if count is over 8. // TODO: Needs session count.
app.get("/", function(req,res){
  if (count > 7){
    res.render("home", {list of stored items?})
  }
  res.redirect("/home");
})





//local checking
app.listen(3000, function(){
  console.log("I can see you");
})
