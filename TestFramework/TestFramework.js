(function (exports) {

  function Test() {

    var testResult = "Test not completed.";

    var compare = function (actual, expectation) {
      if (actual === expectation) {
        testResult = "Test Passed.";
      } else {
        testResult = "Test Failed.";
      }
      console.log(testResult);
    }

    var compareArray = function (actual, expectation) {
      if (actual.length !== expectation.length) {
        testResult = "Test Failed."
      } else {
        compareArrayItems(actual, expectation);
      }
      console.log(testResult);
    }

    var compareArrayItems = function (actual, expectation) {
      var differencesCounter = actual.length;
      for (var i = 0; i < actual.length; i++) {
        if (actual[i] === expectation[i]) {
          differencesCounter --;
        }
      }
      checkArraysResult(differencesCounter);
    }

    var checkArraysResult = function (num) {
      if (num > 0) {
        testResult = "Test Failed.";
      } else {
        testResult = "Test Passed.";
      }
    }

    return {
      compare: compare,
      compareArray: compareArray
    }
  }

  exports.Test = Test;
})(this);
