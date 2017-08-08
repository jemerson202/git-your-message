exports.reversestr =
  function(string) {
    return string.split('').reverse().join("");
};

exports.checkStr =
  function(string) {
    if(typeof string === 'string');
    return true;
  }
