/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  /**
     majority element는 nums의 길이의 1/2 이상 출현하는 요소
   */
  const elementCounter = new Map();
  const times = Math.ceil(nums.length / 2);

  for (const num of nums) {
    elementCounter.set(num, (elementCounter.get(num) || 0) + 1);

    if (elementCounter.get(num) >= times) {
      return num;
    }
  }
};