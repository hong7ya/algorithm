/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, startingColor) {
  /**
    인접: 4가지 방향 필요. sr은 세로 방향. sc는 가로 방향
    행렬이므로 중첩 배열로 구현되어 있음
    repeating + directly adjacent => 재귀
   */
  if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1) {
    return image;
  }

  if (image[sr][sc] === color) {
    return image;
  }

  if (startingColor === undefined) {
    // 초기 시작
    return floodFill(image, sr, sc, color, image[sr][sc]);
  }

  if (image[sr][sc] === startingColor) {
    image[sr][sc] = color;

    floodFill(image, sr + 1, sc, color, startingColor);
    floodFill(image, sr - 1, sc, color, startingColor);
    floodFill(image, sr, sc + 1, color, startingColor);
    floodFill(image, sr, sc - 1, color, startingColor);
  }

  return image;
};