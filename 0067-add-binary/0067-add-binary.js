/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
    안전한 정수 범위를 넘을 수 있음
   */
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
  
};