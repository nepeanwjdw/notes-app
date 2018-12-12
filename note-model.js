(function (exports) {

  function Note(string) {
    var text = string;

    return {
      returnText: function() {
        return text;
      }
    }
  }

  exports.Note = Note;
})(this);
