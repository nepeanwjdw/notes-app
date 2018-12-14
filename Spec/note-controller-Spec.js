var test = new Test();
var noteController = new NoteController();

var expectation = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
test.compare(noteController.view.convert(), expectation);
