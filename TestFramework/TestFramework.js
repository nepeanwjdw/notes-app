function Test() {

}

Test.prototype.runTest = function(klass, klassParam, prop, propParam, expectation) {
  var kParam = '';
  var pParam = '';
  if (klassParam != '') { kParam = `('${klassParam}')`; }
  var testClass = eval(
    `new ${klass}${kParam};`
    );
  if (propParam != '') { pParam = `('${propParam})'`; }
  var testResult = eval(
    `testClass.${prop}${pParam};`
    );
  var testExpectation = expectation;
  if (testResult === testExpectation) { console.log('Test passed.'); }
  else { console.log('Test failed.'); }
}
