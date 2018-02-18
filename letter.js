var Letter = function(char){
    this.char = char;
    this.guessed = false;
}

Letter.prototype.displayed = function(){
  return this.guessed ? this.char : "_";
}

module.exports = Letter;