var Letter = require("./letter");

var Word = function(word) {
  this.letterArr = [];
  this.correct = false;
    for (let i = 0; i < word.length; i++) {
      var newLetter = new Letter(word.charAt(i));
      this.letterArr.push(newLetter);
    }
  };


module.exports = Word;
