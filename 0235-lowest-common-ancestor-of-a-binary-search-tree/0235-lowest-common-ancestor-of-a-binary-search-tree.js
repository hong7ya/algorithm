/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  /**
    이진 탐색 트리: 서브 트리의 모든 노드의 값은, 부모보다 모두 크거나 모두 작음
    DFS: 작업 후, 더 이상 들어갈 노드가 없는 경우 pop(배열 스택이나 콜 스택 활용)

    공통 조상: p.val과 q.val 사이에 있어야 함
    즉, p.val 이상 q.val 이하 사이의 첫 번째 값을 가지고 있는 노드여야 함
   */
  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};