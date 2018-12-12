var test = new Test();
var noteList = new NoteList();
var outputHTML = new outputHTML();

noteList.addNote("abc");
noteList.addNote("def");

expectation = "<ul><li><div>abc</div></li><li><div>def</div></li></ul>";
test.compare(outputHTML(noteList), expectation);
