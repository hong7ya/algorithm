/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
    이진 탐색

    정렬되어 있기 때문에 이진 탐색 가능 -> O(log n)
    1. 양 끝단을 가리키는 포인터 left와 right 2개 필요
    2. 정 가운데를 가리키는 mid 포인터 필요 -> mid = Math.floor((right + left) / 2)
    3. mid가 target보다 클 경우, 왼쪽의 절반 영역 탐색 필요 -> right을 mid의 바로 옆으로 옮긴다
    4. mid가 target보다 작을 경우, 오른쪽의 절반 영역 탐색 필요 -> left를 mid의 바로 옆으로 옮긴다
    5. 위의 과정을 언제까지 반복 할 까? left <= right 까지 반복
   */
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
};