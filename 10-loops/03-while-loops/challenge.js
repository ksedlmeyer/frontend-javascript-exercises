module.exports.stream = function(conditionalFn, actionFn) {
  while (conditionalFn()) {
    actionFn();
  }
}

module.exports.sumNumbers = function(array) {
  var sum = 0;
  while (array.length > 0) {
    sum += array.shift();
  }
  return sum;
}