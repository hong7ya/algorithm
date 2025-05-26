/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
    투 포인터

    세 자리 중, 하나를 이미 지정해 놓는 다면?
    중복 방지: 정렬, 이전 값과 같은 경우 포인터 업(i와 left 검사를 했다면, right은 검사할 필요 없음)

    -5 1 2 3 4
   */
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const target = 0 - nums[i];

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] > target) {
        right -= 1;

        continue;
      }

      if (nums[left] + nums[right] === target) {
        result.push([nums[i], nums[left], nums[right]]);
      }

      left += 1;

      while (nums[left] === nums[left - 1]) {
        left += 1;
      }
    }
  }
  return result;
};