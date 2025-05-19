/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  /**
    배열 간격 병합

    1. intervals의 앞에 추가되는 경우: 
      newInterval의 end가 interval 원소의 start보다 작을 경우
      -> newInterval 삽입
    2. intervals의 뒤에 추가되는 경우:
      newInterval의 start가 interval 원소의 end 보다 클 경우
      -> interval 삽입
    3. 병합
      -> newInterval과 intervals 원소 병합
      -> 삽입은 아직 하지 않음
   */
  const result = [];
  let insertIndex = 0;

  if (!intervals.length) {
    return [newInterval];
  }

  for (let i = 0; i < intervals.length; i += 1) {
    const startOfInterval = intervals[i][0];
    const endOfInterval = intervals[i][1];

    if (newInterval[1] < startOfInterval) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    if (newInterval[0] > endOfInterval) {
      result.push([startOfInterval, endOfInterval]);
      continue;
    }

    newInterval = [Math.min(newInterval[0], startOfInterval), Math.max(newInterval[1], endOfInterval)];
  }

  result.push(newInterval);
  return result;
};
