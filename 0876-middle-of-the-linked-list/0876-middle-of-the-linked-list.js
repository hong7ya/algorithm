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
var middleNode = function (head) {
  /**
    거북이와 토끼 알고리즘(투 포인터 응용)

    1. 속도가 빠른 포인터 하나, 절반의 속도를 가지고 있는 느린 포인터 하나 필요
    2. 2배의 속도가 차이가 나므로, 항상 느린 포인터는 빠른 포인터의 중간에 위치함
      1 2 3 4 5
      2 3 5 7 9
    3. 빠른 포인터가 링크드리스트의 끝에 위치하면, 느린 포인터의 위치가 링크드리스트의 중간임
   */
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer) {
    if (!fastPointer.next) {
      return slowPointer;
    }

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};