/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /**
    해시 테이블

    중복된 숫자가 존재할 경우 true
   */
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }

    set.add(num);
  }

  return false;
};