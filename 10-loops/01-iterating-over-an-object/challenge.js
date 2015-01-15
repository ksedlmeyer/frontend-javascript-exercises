module.exports.getKeys = function(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property);
  }
  return newArray;
}

module.exports.getValues = function(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}

module.exports.objectToArray = function(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property + " is " + object[property]);
  }
  return newArray;
}