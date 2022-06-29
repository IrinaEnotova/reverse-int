module.exports = function reverse (n) {
  n = Math.abs(n);
  let nString = n.toString();
  let i = nString.length;
  let result = '';

  while(i > 0) {
    result += nString[i-1];
    console.log(result);
    i--;
  }

  return +result;
}
