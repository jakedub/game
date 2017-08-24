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
  word: theWord(),
  displayGuess: [],
  guesses: 8,
  letter: [],
  incorrect: [],
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

app.post("/", function(req,res){
  if (endGame()){
    wordGuess = beginGame();
    // wordGuess.incorrect = displayWrong();
    res.redirect("/");
  } else {
    console.log(req.body);
    wordGuess.letter.push(req.body.trial);
    countLetters(req.body.trial);
    console.log(wordGuess);
    res.redirect('/');
  }
})

function theWord() {
  let word = words[Math.floor(Math.random()*words.length)];
  return word;
}


//needs to run through entry and push to guess list. Needs to replace the "-" with correct letter
function newWords(word,letters){
  let displayGuess = [];
  for (let i=0; i<word.length; i++){
    if (word.includes(letters[i])){
     displayGuess[i-1]= letters[i];
    } else {
      displayGuess.push("-");
    }
  }
  return displayGuess;
}

// function displayWrong(){
//   let notCorrect = [];
//   for (let i= 0; i< wordGuess.word.length; i++){
//     notCorrect.push({letter.wordGuess[i]}, broken.wordGuess[i] === wordGuess.displayGuess)};
//   return notCorrect;
// }

function countLetters(guess){
  let splitWord = wordGuess.word.split("");
  if(!splitWord.includes(guess)) {
    wordGuess.guesses --;

  }
}

//end of the game situation
// function endGame(){
//   if (wordGuess.guesses < 1){
//     wordGuess.completion == "I have bested you"
//     return;
//   } else {
//     wordGuess.completion == "I will beat you next time"
//     return;
//   }
// }

function endGame(){
  if (wordGuess.word === wordGuess.letter && wordGuess.guess > 0){
    wordGuess.completion === "Ahhhh...I'm dead"
    return;
  } else {
    wordGuess.completion === "AI's are superior"
    return;
  }
}

function beginGame(){
  let newTrial = {
    word: theWord(),
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

// app.get("/trial", function (req,res){
//   res.render("index");
// })
//local checking
app.listen(3000, function(){
  console.log("I can see you");
})
