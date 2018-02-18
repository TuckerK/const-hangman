var Word = function(word){
    this.letterArr = [];
    for (let i = 0; i < word.length; i++) {
      var newLetter = new Letter(word.charAt(i));
      this.letterArr.push(newLetter);
    }
}

module.exports = Word;