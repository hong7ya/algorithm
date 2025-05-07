/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  /**
    해시 테이블

    앞뒤가 똑같으려면,
    홀 수인 묶음이 하나만 존재하거나(aaabb)
    모두 짝수인 묶음이어야 함(bbss)

    즉, 각 문자의 카운트 중 짝수 묶음들 카운트 + 가장 큰 홀수 묶음 1개 카운트
    나머지 홀수 묶음이 있다면, -1 해서 짝수로 만든 다음 넣어줌
   */
  if (s.length === 1) {
    return 1;
  }

  const letterCountMap = new Map();

  for (const letter of s) {
    letterCountMap.set(letter, (letterCountMap.get(letter) || 0) + 1);
  }

  const sorted = [...letterCountMap.values()].sort((a, b) => b - a);

  let hasCheckedOnlyOdd = false;
  let result = 0;

  for (const count of sorted) {
    if (count % 2 === 0) {
      result += count;
      continue;
    }

    if (count % 2 !== 0 && !hasCheckedOnlyOdd) {
      result += count;
      hasCheckedOnlyOdd = true;
      continue;
    }

    if (count % 2 !== 0 && hasCheckedOnlyOdd) {
      result += (count - 1);
      continue;
    }
  }

  return result;
};