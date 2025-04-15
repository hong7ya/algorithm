/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /**
    투 포인터

    문자열 s의 양 끝단을 가리키는 포인터 2개 사용
    포인터가 엇갈리기 시작하면 반복 종료
    포인터를 이동시키는 것은 문자나 숫자가 아닐 경우 각 포인터의 방향으로 한 칸씩 이동
    문자나 숫자임에도 불구하고 두 포인터가 가리키는 문자열이 같지 않다면 Palindrome이 아님
   */
  let left = 0;
  let right = s.length - 1;

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

  while (left <= right) {
    const leftCharConvertedToLowerCase = s[left].toLowerCase();
    const rightCharConvertedToLowerCase = s[right].toLowerCase();

    if (!isAlphanumeric(leftCharConvertedToLowerCase)) {
      left += 1;
      continue;
    }

    if (!isAlphanumeric(rightCharConvertedToLowerCase)) {
      right -= 1;
      continue;
    }

    if (leftCharConvertedToLowerCase !== rightCharConvertedToLowerCase) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};