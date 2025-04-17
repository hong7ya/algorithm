/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
    해시 맵 사용

    1. s -> 각 글자 당 나타난 횟수를 Map에 저장
    2. t -> Map에서 카운트 낮춤. 카운트가 0일 경우 delete
    3. Map의 사이즈가 0일 경우 아나그램. 아닐 경우 아나그램이 아님
   */
  const lettersCount = new Map();

  for (const letter of s) {
    if (lettersCount.has(letter)) {
      lettersCount.set(letter, lettersCount.get(letter) + 1);
    } else {
      lettersCount.set(letter, 1);
    }
  }
  
  for (const letter of t) {
    if (!lettersCount.has(letter)) {
      return false;
    }

    lettersCount.set(letter, lettersCount.get(letter) - 1);

    if (lettersCount.get(letter) === 0) {
      lettersCount.delete(letter);
    }
  }

  return lettersCount.size === 0 ? true : false;
};