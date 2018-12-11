var testOne = new Test();

var noteList = new NoteList();
var firstNote = new Note("abc");
var secondNote = new Note("def");

noteList.addNote(firstNote);
noteList.addNote(secondNote);

testOne.compareArray(noteList.viewNotes(), ["abc", "def"])
