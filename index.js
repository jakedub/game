const express = require("express"); //Express
const path = require ("path");
const session = require("express-session"); //Express Session
const app = express();
const mustache = require ("mustache");
const mustacheExpress = require('mustache-express');
const bodyParser = require ("body-parser");
const fs = require("fs");
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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

let wordGuess = {
  word: theGuess(),
  displayGuess: [],
  guesses: 8,
  letter: [],
  completion: ""
};


app.get("/", function(req,res){
  wordGuess.displayGuess = newWords(wordGuess.word, wordGuess.letter);
  if (endGame(res)){
    res.render("end", wordGuess);
  } else {
    res.render("index", wordGuess);
  }
})

app.post("/trial", function(req,res){
  if (endGame()){
    wordGuess = beginGame();
    res.redirect("/");
  } else {
    wordGuess.letter.push(req.body.guess);
    countLetters(req.body.guess);
    res.render("index");
  }
})

function theGuess() {
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}


//needs to run through entry and push to guess list
function newWords(word,letters){
  let displayGuess = [];
  for (let i=0; i<word.length; i++){
    if (letters.includes(word[i])){
      displayGuess.push(letters[i])
    } else {
      displayGuess.push("-");
    }
  }
  return displayGuess;
}

function countLetters(guess){
  let splitWord = wordGuess.word.split("");
  if(!splitWord.includes(guess)) {
    wordGuess.guess --;
  }
}

//end of the game situation
function endGame(){
  if (wordGuess.guesses === 0){
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
app.get("/", function (req,res){
  res.render("index");
})

app.get("/trial", function (req,res){
  res.render("trial");
})
//local checking
app.listen(3000, function(){
  console.log("I can see you");
})
