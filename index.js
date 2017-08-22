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
  displayGuess: [],
  guesses: 8,
  letter: [],
  completion: ""
};


app.get("/home", function(req,res){
  wordGuess.displayGuess = newWords(wordGuess.word, wordGuess.letter);
  if (endGame(res)){
    res.render("endGame", wordGuess);
  } else {
    res.render("index", wordGuess);
  }
})

app.post("/trial", function(req,res){
  if (endGame()){
    game = newGame();
    res.redirect("/home");
  } else {
    game.letter.push(req.body.trial);
    countLetters(req.body.trial);
    res.render("/home");
  }
})

function theGuess() {
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}


//needs to run through entry and push to guess list right?
function newWords(x,y){
  let displayGuess = [];
  for (let i=0; i<word.length, i++){
    if (y.includes(x[i])){
      displayGuess.push(y[i])
    } else {
      displayGuess.push("-");
    }
  }
  return displayGuess;
}

function guessCount(guess){
  let splitWord = game.word.split("");
  if(!splitWord.includes(guess)) {
    game.guess --;
  }
}
//end of the game situation
function endGame(){
  if (game.guesses === 0){
    wordGuess.completion == "I have bested you"
    return;
  } else {
    wordGuess.completion == "I will beat you next time"
    return;
  }
}

function beginGame(){
  let newTrial = {
    word: theGuess(),
    displayGuess: [],
    guesses: 8,
    letter: [],
    completion: ""
  };
  return beginGame;
}

//rendering to initial page. Setting home as initial site. Using index.mustache for the page.
app.get("/home", function (req,res){
  res.render("index");
})



//local checking
app.listen(3000, function(){
  console.log("I can see you");
})
