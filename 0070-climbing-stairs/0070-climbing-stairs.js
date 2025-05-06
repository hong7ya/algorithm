/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
    메모이제이션

    n = 1 -> [1] => 1
    n = 2 -> [1,1] [2] => 2
    n = 3 -> [1,1,1] [2,1] [1,2] => 3
    n = 4 -> [1,1,1,"1"] [2,1,"1"] [1,2,"1"] [1,1,"2"] [2,"2"] => 5

    2개째 계단이나 3개째 계단에서 4개째 계단에 "한 번에" 도달할 수 있음(한 번에 1칸이나 2칸을 갈 수 있으니까)
    즉, 3번째 계단까지 가는 방법의 수 + 2번째 계단까지 가는 방법의 수 계산
   */
  if (n === 1) {
    return 1;
  }

  // 계산 편의성을 위해, 인덱스를 계단 층 처럼 취급하기 위함
  const memo = new Array(n + 1).fill(null);

  memo[0] = 1;
  memo[1] = 1; // 계단 1층

  for (let staircase = 2; staircase <= n; staircase += 1) {
    memo[staircase] = memo[staircase - 1] + memo[staircase - 2];
  }

  return memo[n];
};