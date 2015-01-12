module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  return {
    title: courseTitle, 
    duration: courseDuration,
    students: courseStudents
  };
}

module.exports.addProperty = function(object, newProp, newValue) {
  if (object[newProp] == undefined){
    object[newProp] = newValue;
    return object;
  }
  else {
    return object;
  }
}



module.exports.formLetter = function(letter) {

return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
}

module.exports.canIGet = function(item, money) {
  var priceTable = {};
  priceTable['MacBook Air'] = 999;
  priceTable['MacBook Pro'] = 1299;
  priceTable['Mac Pro']= 2499;
  priceTable['Apple Sticker'] = 1;

  return priceTable[item] <= money;
}