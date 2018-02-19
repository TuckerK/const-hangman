const inquirer = require("inquirer");
const Word = require("./word");
const figlet = require("figlet");

figlet("HANGMAN IN SPACE", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

const wordArr = [
  "quasar",
  "blackhole",
  "rocket",
  "elonmusk",
  "moon",
  "planet",
  "galaxy",
  "universe",
  "houston",
  "meteor"
];

let rand = wordArr[Math.floor(Math.random() * wordArr.length)];

const generateWord = () => {
  let newWord = new Word(rand);
  newWord.letterArr.forEach(element => {
    console.log(element.char);
  });
};

generateWord();

let guessCount = 0;

const gameLogic = () => {
  guessCount = 10;
};

const chooseLetter = () =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "Choose a letter:",
        name: "letterChoice"
      }
    ])
    .then(function(usr) {
      array.forEach(element => {
        if (usr.letterChoice === element.char) {
          this.element.guessed = true;
          console.log(
            "Correct! You have " + guessCount + " guesses remaining!"
          );
        } else {
          guessCount--;
          console.log(
            "Wrong, ya dingus! You have " + guessCount + " guesses remaining!"
          );
        }
      });
    });
