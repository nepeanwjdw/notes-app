(function (exports) {

  function OutputHTML() {

    return {
      convert: function(noteList) {
        var notes = noteList.viewNotes();
        var output = "";
        for (var i = 0; i < notes.length; i++) {
          output += "<li><div>" + notes[i] + "</div></li>";
        }
        return "<ul>" + output + "</ul>";
      }
    }
  }

  exports.OutputHTML = OutputHTML;
})(this);
