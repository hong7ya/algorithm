/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   /**
     메모를 위한 해시맵 -> 한 번 순횐 돌 때, 수집 & 비교
     
     순회
     'target - 현재 숫자'의 계산 결과가 메모에 존재하는 지 확인 -> Map.has
     메모에 존재한다면, 순회 종료하고 [발견 인덱스, 현재 인덱스] 반환
     메모에 존재하지 않는다면, 메모에 현재 숫자 넣기 + 다음 순회로 이동
    */
    const memoMap = new Map();

    for (let i = 0 ; i < nums.length ; i += 1) {
        const currentNum = nums[i];

        if (memoMap.has(target - currentNum)) {
            const memoedIndex = memoMap.get(target - currentNum);
            return [memoedIndex, i];
        }
        
        memoMap.set(currentNum, i);
    }
};