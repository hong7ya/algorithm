/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
    메모. Dynamic Programming

    만약 오늘 판매를 한다고 한다면, 어제들 중에 가장 저렴한 날에 구매를 했어야 함 => 저렴한 날 + 최대 이익 기억하기
    모든 장이 서는 날까지 반복하며, 저렴한 날과 최대 이익 갱신 필요
   */
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (const currentPrice of prices) {
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    
    // 내일을 위해 현재의 가격 미리 계산
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};