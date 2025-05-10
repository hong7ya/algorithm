/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
    현재 연결리스트를 순회하면서, 현재 노드를 새 연결리스트에 쌓아가기

    3 포인터 필요
   */
  if (!head) {
    return head;
  }

  let originCurrentNode = head;
  let originNextNode = null;
  let reversedHeadNode = null;

  while (originCurrentNode) {
    originNextNode = originCurrentNode.next;

    originCurrentNode.next = reversedHeadNode;
    reversedHeadNode = originCurrentNode;

    originCurrentNode = originNextNode;
  }

  return reversedHeadNode;
};