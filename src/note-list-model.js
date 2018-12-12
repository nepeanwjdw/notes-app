(function (exports) {

  function NoteList() {
    var notes = [];

    return {
      addNote: function (string) {
        var note = new Note(string);
        notes.push(note);
      },
      viewNotes: function () {
        var notesArray = [];
        for (var i = 0; i < notes.length; i++) {
          notesArray.push(notes[i].returnText());
        }
        return notesArray;
      }
   }
  }

  exports.NoteList = NoteList;
})(this);
