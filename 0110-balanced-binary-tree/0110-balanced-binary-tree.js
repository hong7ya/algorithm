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
 * @return {boolean}
 */
var isBalanced = function (root) {
  /**
    밸런스
    -> 루트 노드에서 왼쪽으로 뎁스는 3인데, 오른쪽 뎁스는 1일 때 false
    -> 뎁스 조사는 dfs
   */

  function dfs(root) {
    if (root === null) {
      return 0;
    }

    const leftDepth = isBalanced(root.left);
    const rightDepth = isBalanced(root.right);

    if (leftDepth === false || rightDepth === false) {
      return false;
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
      return false;
    }

    // 가지가 한 쪽 밖에 없을 경우를 위해 max 처리
    return Math.max(leftDepth, rightDepth) + 1;
  }

  return root !== null ? dfs(root) : true;
};