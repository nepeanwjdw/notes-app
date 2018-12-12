var test = new Test();
var noteList = new NoteList();

noteList.addNote("abc");
noteList.addNote("def");

test.compareArray(noteList.viewNotes(), ["abc", "def"])
