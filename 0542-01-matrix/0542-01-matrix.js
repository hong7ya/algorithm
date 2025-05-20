/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  /**
    BFS + 행렬

    0에서의 거리를 구해 갱신 시켜나가기
    큐에는 먼저 0의 좌표들을 넣어두기
    큐에 넣어 뒀다는 것은, 이미 방문했다는 것을 의미 -> 방문하지 않은 요소는 null로 초기화
   */
  const row = mat.length;
  const col = mat[0].length;
  const queue = []; // 임시로 배열 사용

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = null;
      }
    }
  }

  while (queue.length !== 0) {
    const [nodeRow, nodeCol] = queue.shift();
    for (let i = 0; i < 4; i += 1) {
      if (
        nodeRow + dy[i] < row && nodeRow + dy[i] >= 0 &&
        nodeCol + dx[i] < col && nodeCol + dx[i] >= 0
      ) {
        if (mat[nodeRow + dy[i]][nodeCol + dx[i]] === null) {
          mat[nodeRow + dy[i]][nodeCol + dx[i]] = mat[nodeRow][nodeCol] + 1;
          queue.push([nodeRow + dy[i], nodeCol + dx[i]]);
        }
      }
    }
  }

  return mat;
};