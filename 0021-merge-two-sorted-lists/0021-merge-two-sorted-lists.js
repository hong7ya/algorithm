/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  /**
   list1, list2 둘 다 next가 null일 때까지 next 포인터를 따라가야 함
   이미 list1, list2 둘 다 정렬 된 것들이니까 
   두 head의 val을 비교하고 작은 val을 현재 병합 중인 연결리스트의 다음 노드의 val로 넣음
   그리고 작았던 연결리스트의 head를 next에 있는 listNode로 갱신
   즉, 리스트들의 머리만 비교하고 작은 머리는 꺼내고 점점 리스트들의 길이(?)를 줄여나감

   [주의]
   테스트 케이스 확인 결과 속이 텅 빈 singly-linked list는 head가 null 임
   즉, return null의 경우도 있음
   */
  
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let mergedHeadNode = new ListNode();
  let mergedTailNode = mergedHeadNode;

  // 초기화
  if (list1.val <= list2.val) {
    mergedHeadNode.val = list1.val;
    list1 = list1.next;
  } else {
    mergedHeadNode.val = list2.val;
    list2 = list2.next;
  }

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      // 다음 노드 연결
      mergedTailNode.next = new ListNode(list1.val, null);
      // 꼬리 갱신
      mergedTailNode = mergedTailNode.next;
      list1 = list1.next;
    } else {
      mergedTailNode.next = new ListNode(list2.val, null);
      mergedTailNode = mergedTailNode.next;
      list2 = list2.next;
    }
  }
  
  // 길이가 남은 연결리스트 처리
  if (list1 !== null) {
    mergedTailNode.next = list1;
  }

  if (list2 !== null) {
    mergedTailNode.next = list2;
  }

  return mergedHeadNode;
};
