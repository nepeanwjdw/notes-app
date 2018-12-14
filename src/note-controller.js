(function (exports) {

  function NoteController(list = new NoteList()) {
    list.addNote("Favourite drink: seltzer")
    this.view = new OutputHTML(list);
  }

  NoteController.prototype.getHTML = function () {
    document.getElementById('app').innerHTML = this.view.convert();
  };

  exports.NoteController = NoteController;
})(this);
