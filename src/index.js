
exports.min = function min (array) {
  if(!array || array.length === 0) return 0;

  return array.reduce((a, b) => a < b ? a : b);
}

exports.max = function max (array) {
  if(!array || array.length === 0) return 0;

  return array.reduce((a, b) => a > b ? a : b);
}

exports.avg = function avg (array) {
  if(!array || array.length === 0) return 0;

  const sum = array.reduce((a, b) => a + b);
  return sum / array.length;
}
