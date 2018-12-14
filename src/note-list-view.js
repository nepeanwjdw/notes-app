(function (exports) {

  function OutputHTML(noteList) {

    var noteList = noteList;

    return {
      convert: function() {
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
