/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  /**
    헤시 테이블

    magazine 문자열들만을 사용해서 ransomNote를 만들 수 있으면 true

    Map: magazine 문자열들을 키로 넣고, 카운팅 작업

    ransomeNote 문자열들을 순회 돌면서, Map에서 해당 문자열 -1.

    문자열 갯수가 0이 된 것은 삭제작업.
    순회시 해당 문자열이 Map에 포함되지 않아 있다는 것이 확인 되면 false
   */
  if (ransomNote === magazine) {
    return true;
  }
  
  const letterMap = new Map();

  for (const letter of magazine) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    } else {
      letterMap.set(letter, 1);
    }
  }

  for (const letter of ransomNote) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) - 1);
    } else {
      return false;
    }

    if (letterMap.get(letter) === 0) {
      letterMap.delete(letter);
    }
  }

  return true;
};