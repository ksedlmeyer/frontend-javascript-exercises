module.exports.newArray = function(w, x, y, z) {
  return [w, x, y, z]
}
module.exports.firstAndLast = function(array) {
  if (array.length < 3) return;
  return [array.shift(), array.pop()];  
}