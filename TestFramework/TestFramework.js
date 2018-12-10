function TestFramework() {

}

TestFramework.prototype.runTest = function(klass, func,  param, expectation) {
  var testClass = eval(`new ${klass}`);
  var testResult = eval(`testClass.${func}("${param}")`);
  var testExpectation = expectation
  if ( testResult === testExpectation) { return "Test passed"; }
  else { return "Test failed"; }
}
