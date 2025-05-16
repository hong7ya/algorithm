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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  /**
    DFS

    DFS를 돌면서 가장 긴 서브트리를 함께 갱신
   */
  const result = { value: 0 };

  function dfs(node, result) {
    if (!node) {
      return 0;
    }

    const leftEdges = dfs(node.left, result);
    const rightEdges = dfs(node.right, result);

    result.value = Math.max(result.value, leftEdges + rightEdges);

    return Math.max(leftEdges, rightEdges) + 1;
  }

  dfs(root, result);

  return result.value;
};