function NoteList() {
  this.notes = [];
}

NoteList.prototype.addNote = function (noteObject) {
  this.notes.push(noteObject);
};

NoteList.prototype.viewNotes = function () {
  var notesArray = []
  for (var i = 0; i < this.notes.length; i++) {
    notesArray.push(this.notes[i].returnText());
  };
  return notesArray;
};
