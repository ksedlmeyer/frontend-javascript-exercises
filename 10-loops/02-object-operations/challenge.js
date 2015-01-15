module.exports.copy = function(object) {
  var newObject = {};
  for (var property in object) {
    newObject[property] = object[property];
  }
  return newObject;
}

module.exports.extend = function(dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
}

module.exports.hasElems = function(object, array) {
  for (var index = 0; index < array.length; index++) {
    if (typeof object[array[index]] === "undefined") {
      return false;
    }
  }
  return true;
}