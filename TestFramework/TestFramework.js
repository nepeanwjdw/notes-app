function Test() {

}

Test.prototype.runTest = function(klass, klassParam, prop, propParam, expectation) {
  var kParam = '';
  var pParam = '';
  if (klassParam != '') {
    if (klassParam === "()") {
      kParam = `()`; }
    else {
      kParam = `('${klassParam}')`;
    }
  }
  var testClass = eval(
    `new ${klass}${kParam};`
    );
  if (propParam != '') {
    if (propParam === "()") {
      pParam = `()`; }
    else {
      pParam = `('${propParam}')`;
    }
  }
  var testResult = eval(
    `testClass.${prop}${pParam};`
    );
  var testExpectation = expectation;
  if (testResult === testExpectation) { console.log('Test passed.'); }
  else { console.log('Test failed.'); }
}
