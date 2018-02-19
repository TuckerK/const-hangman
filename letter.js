var Letter = function(char){
    this.char = char;
    this.guessed = false;
}

Letter.prototype.displayed = function(){
  if(this.guessed = true){
    return this.char;
  }else{
    return "_"
  }
}

module.exports = Letter;