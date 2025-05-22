/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
    투 포인터

    부분 문자열이 유효할 때 R을 하나 옆으로 옮김
      -> Set에 문자열 추가
    중복이 발견되면 L을 하나 옆으로 옮김
      -> Set에서 문자열 빼기

    중복 체크 -> Set
    가장 긴 길이 체크 -> R - L + 1
   */
  let left = 0;
  let result = 0;

  const letterSet = new Set();

  for (let right = 0; right < s.length; right += 1) {
    while (letterSet.has(s[right])) {
      letterSet.delete(s[left]);
      left += 1;
    }

    letterSet.add(s[right]);
    result = Math.max(right - left + 1, result);
  }

  return result;
};
