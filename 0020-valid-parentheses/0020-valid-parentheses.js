/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
     스택 + 순회
 
     s 문자열 순회 중, 열린 괄호를 만나면 스택에 푸시
     닫힌 괄호를 만나면, 쌍을 이루는 괄호일 경우, 스택에서 팝
     닫힌 괄호를 만나면, 쌍을 이루지 못하는 괄호일 경우, false 반환
   */
  const stack = [];
  const openBrackets = new Set(["(", "[", "{"]);
  const closeBrackets = new Set([")", "]", "}"]);
  const pairs = new Map();

  pairs.set(")", "(");
  pairs.set("]", "[");
  pairs.set("}", "{");

  for (const char of s) {
    if (openBrackets.has(char)) {
      stack.push(char);
    }

    if (closeBrackets.has(char)) {
      const last = stack[stack.length - 1];

      if (last === pairs.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length ? false : true;
};
