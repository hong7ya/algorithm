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
var maxDepth = function (root) {
  /**
    DFS (재귀 콜 스택 활용)

    끝에 도달해서 더 나아가려고 하면, 없는 노드라는 의미로 0 반환
    리프 노드는 자신이 끝이라는 의미로 1 반환
    반환값을 맞춰야 함
    가장 깊은 자식의 수를 반환하며 쌓아감
   */
  function dfs(node) {
    if (node === null) {
      return 0;
    }

    return Math.max(dfs(node.left), dfs(node.right)) + 1;
  }

  return dfs(root);
};