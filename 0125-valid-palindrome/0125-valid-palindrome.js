/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /**
    한 바퀴 순회 돌면서, 가공 후, 두 가지 방면으로 수집
    가공: 숫자, 문자(소문자화)만 남기기
    수집 1: 오름차순으로
    수집 2: 내림차순으로
    순회 종료이후, 수집 1과 수집 2가 같다면 Palindrome 임
   */
  let collect1 = "";
  let collect2 = "";

  function isAlphanumeric(char) {
    const codePoint = char.codePointAt(0);

    if ("a".codePointAt(0) <= codePoint && codePoint <= "z".codePointAt(0)) {
      return true;
    }

    if ("0".codePointAt(0) <= codePoint && codePoint <= "9".codePointAt(0)) {
      return true;
    }

    return false;
  }

  for (const char of s) {
    const convertedToLowerCase = char.toLowerCase();

    if (isAlphanumeric(convertedToLowerCase)) {
      collect1 = collect1 + convertedToLowerCase;
      collect2 = convertedToLowerCase + collect2;
    }
  }

  return (collect1 === collect2) ? true : false;
};