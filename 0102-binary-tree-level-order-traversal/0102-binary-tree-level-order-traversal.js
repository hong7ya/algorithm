/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  /**
    이진 트리에서의 BFS

    큐에 자식들을 넣음 -> 방문 체크
    큐의 앞에서 부터 하나씩 꺼내씀
   */
  if (!root) {
    return [];
  }

  const queue = []; // 임시 큐
  const result = [];

  queue.push({
    level: 0,
    node: root
  });

  while (queue.length > 0) {
    const { level, node: currentNode } = queue.shift();

    if (!result[level] && typeof level === "number") {
      result[level] = [];
    }

    result[level].push(currentNode.val);

    if (currentNode.left) {
      queue.push({
        level: level + 1,
        node: currentNode.left
      });
    }

    if (currentNode.right) {
      queue.push({
        level: level + 1,
        node: currentNode.right
      });
    }
  }

  return result;
};