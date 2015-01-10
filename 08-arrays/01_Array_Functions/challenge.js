module.exports.reversePlusOne = function(array) {
  array.reverse().unshift(1);
  return array;
}

module.exports.plusesEverywhere = function(array) {
  if(array.length < 2) return;
  return array.join('+');
}

module.exports.arrayQuantityPlusOne = function(array) {
  return array.length + 1;
}