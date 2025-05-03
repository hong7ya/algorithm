/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    /**
      이진 탐색

      유효하지 않은 지 판별하는 함수: isBadVersion
      탐색해야 하는 데이터: [1, 2, ... n]

      형태: [유효, 유효,...,나쁨,나쁨,나쁨]
     */
    let left = 1;
    let right = n;
    let target = Math.floor(n / 2);

    while (left <= right) {
      if (isBadVersion(target)) {
        right = target - 1;
      } else {
        left = target + 1;
      }

      target = Math.floor((left + right) / 2);
    }

    return target + 1;
  };
};