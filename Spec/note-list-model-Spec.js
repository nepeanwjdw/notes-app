var testOne = new Test();
var noteList = new NoteList();

noteList.addNote("abc");
noteList.addNote("def");

testOne.compareArray(noteList.viewNotes(), ["abc", "def"])
