function Test() {

}

Test.prototype.compare = function (actual, expectation) {
  if (actual === expectation) {
    console.log('Test Passed');
  } else {
    console.log('Test Failed');
  }
};

Test.prototype.compareArray = function (actual, expectation) {
  if (actual.length !== expectation.length) {
    console.log('Test Failed');
  } else {
    var differencesCounter = actual.length;
    for (var i = 0; i < actual.length; i++) {
      if (actual[i] === expectation[i]) {
        differencesCounter --;
      };
    };
    if (differencesCounter > 0) {
      console.log('Test Failed');
    } else {
      console.log('Test Passed');
    };
  };
};
