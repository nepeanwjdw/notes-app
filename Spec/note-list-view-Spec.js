var test = new Test();
var noteList = new NoteList();
var outputHTML = new OutputHTML();

noteList.addNote("abc");
noteList.addNote("def");

var expectation = "<ul><li><div>abc</div></li><li><div>def</div></li></ul>";
test.compare(outputHTML.convert(noteList), expectation);
