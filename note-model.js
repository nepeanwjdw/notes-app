function Note(string) {
  this.text = string;
}

Note.prototype.returnText = function() {
  return this.text;
}
