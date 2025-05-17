/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
    DP 또는 Kadane's Algorithm

    순회를 돌면서, 이전 메모에 현재 원소를 합침
    만약, 이전 메모가 음수일 경우, 합치지 않고 현재 원소부터 시작하는 것이 최대 합을 구할 수 있음

    이전 메모: -3
    현재 값: 1
    -> 현재 값 1 부터 다시 최대 합을 구하는 것이 이득

    이전 메모: -3
    현재 값: -4
    -> 음수끼리는 더하더라도 더 음수가 되니까, 이때에도 현재 값 -4 부터 다시 최대 합을 구하는 것이 이득
   */
  let memo = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (memo < 0) {
      memo = 0;
    }

    memo += nums[i];
    result = Math.max(result, memo);
  }

  return result;
};