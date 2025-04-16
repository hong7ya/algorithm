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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  /**
    DFS
    왼쪽 가지를 따라서 끝까지 깊게 들어감.
    오른쪽 가지를 따라서 끝까지 깊게 들어감.
    더 이상 들어갈 노드가 없는 경우 pop(배열 스택이나 콜 스택 활용). 
   */
  if (!root) {
    return root;
  }

  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  
  if (root.left) {
    invertTree(root.left);
  }

  if (root.right) {
    invertTree(root.right);
  }

  return root;
};