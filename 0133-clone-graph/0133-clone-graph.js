/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  /**
    그래프 문제

    노드들을 파악하기 위해, DFS 순회 필요 -> 새 노드들 생성
    노드들을 올바르게 연결하기 위해, 참조 저장 필요 -> 오래된 노드, 새 노드 참조 매핑
    방문 체크를 위해, 참조 저장 매핑 재활용 가능 -> 매핑이 있다는 사실은, 이미 방문했었던 곳이라는 것
   */
  const checkMap = new Map();
  const queue = [];

  if (!node) {
    return [];
  }

  // 루트 방문 처리
  queue.push(node);
  if (!map.has(node.val)) {
    map.set(node.val, [...]);
  }

  return node
};