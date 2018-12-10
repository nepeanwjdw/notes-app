function TestFramework() {

}

TestFramework.prototype.runTest = function(name) {
  var testClass = new HelloWorld;
  var testResult = testClass.sayHello("test");
  var testExpectation = "Hello test"
  if ( testResult === testExpectation) { return "Test passed"; }
  else { return "Test failed"; }
}