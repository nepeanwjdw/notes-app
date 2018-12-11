function Test() {

}

Test.prototype.compare = function (a, b) {
  if (a === b) {
    console.log('Test Passed');
  } else {
    console.log('Test Failed');
  }
};
