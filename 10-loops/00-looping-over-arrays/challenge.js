module.exports.sumNumbers = function(array) {
  if (array.length == 0) {
    return 0
  }
  else {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}

module.exports.splitAndLowerCaseString = function(inputString) {
  var comma = ','
  return inputString.toLowerCase().split(comma);
}

module.exports.addIndex = function(array) {
  var newArray = [];
  for (var index = 0; index < array.length; index++) {
    newArray.push(index + " is " + array[index]);
  }
  return newArray;
}
