/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  /**
    거북이와 토끼 알고리즘(투 포인터 응용)

    1. 속도가 빠른 포인터와 속도가 느린 포인터를 설정함
    2. 연결리스트에 사이클이 있다면, 언젠가는 빠른 포인터가 한 바퀴를 다 돌고 느린 포인터를 만남
   */
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};