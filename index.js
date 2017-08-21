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
app.use(express.static("./usr/share/dict/words"));

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

//variable for game

const wordGuess = {
  word: theGuess(),
  display: [],
  guesses: 8,
  letter: [],
  endMessage: ""
};

//pull words
function theGuess() {
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}

app.get("/home", function(req,res){
  wordGuess.display = newWords(wordGuess.word, wordGuess.letter);
  if (endGame function){
    res.render("endGame", wordGuess);
  } else {
    res.render("index", game);
  }
})

//needs to run through
function newWords(x,y){
  for (let i=0; i<word.length, i++){
    if (y.includes(x[i])){
      display.push(y[i])
    } else {
      display.push("-");
    }
  }
  return display;
}
//end of the game situation
function endGame(){
  if (game.guesses === 0){
    wordGuess.endMessage == "I have bested you"
    return;
  } else {
    wordGuess.endMessage == "I will beat you next time"
    return;
  }
}
//if wrong up 1
app.get("/wrong", (req, res) => {
  req.session.count += 1;
  res.redirect("/home");
});

//rendering to initial page. Setting home as initial site. Using index.mustache for the page.
app.get("/home", function (req,res){
  res.render("index");
})



//local checking
app.listen(3000, function(){
  console.log("I can see you");
})
