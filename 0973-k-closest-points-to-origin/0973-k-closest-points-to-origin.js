/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  /**
    힙(우선순위 큐)
    
    좌표평면 상에서 원점과 가장 가까운 점들을 k개 반환

    좌표들의 거리 모두 계산 필요
    거리들을 수집할 때, 정렬하면서 수집할 것
    거리들을 k개 만큼 꺼낼때, 꺼낸 후 정렬 할 것

    힙에 넣을 때 -> 마지막 노드에서 위로 방향
    힙에서 뺄 때 -> 루트 노트에서 아래로 방향

    힙의 value: {
      distance: 34,
      point: []
    }
   */
  class minHeap {
    constructor() {
      this.heap = [null];
    }

    push(value) {
      this.heap.push(value);

      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor(currentIndex / 2);

      while (parentIndex !== 0 && this.heap[parentIndex].distance > value.distance) {
        const tmp = this.heap[parentIndex];
        this.heap[parentIndex] = value;
        this.heap[currentIndex] = tmp;

        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
      }
    }

    pop() {
      const returnValue = this.heap[1];
      this.heap[1] = this.heap.pop();

      let currentIndex = 1;
      let leftIndex = 2;
      let rightIndex = 3;

      while (
        (this.heap[leftIndex] && this.heap[currentIndex].distance > this.heap[leftIndex].distance) ||
        (this.heap[rightIndex] && this.heap[currentIndex].distance > this.heap[rightIndex].distance)
      ) {
        if (this.heap[rightIndex] && this.heap[rightIndex].distance < this.heap[leftIndex].distance) {
          const tmp = this.heap[rightIndex];
          this.heap[rightIndex] = this.heap[currentIndex];
          this.heap[currentIndex] = tmp;

          currentIndex = rightIndex;
        } else {
          // this.heap[rightIndex]가 없을 경우 항상 왼쪽 노드와 교체
          const tmp = this.heap[leftIndex];
          this.heap[leftIndex] = this.heap[currentIndex];
          this.heap[currentIndex] = tmp;

          currentIndex = leftIndex;
        }
        rightIndex = currentIndex * 2 + 1;
        leftIndex = currentIndex * 2;
      }

      return returnValue;
    }
  }

  const distanceWithPoitns = new minHeap();
  for (const [x, y] of points) {
    const distance = Math.sqrt(x ** 2 + y ** 2);
    distanceWithPoitns.push({
      distance,
      point: [x, y]
    });
  }

  const result = [];
  for (let i = 0; i < k; i += 1) {
    result.push(distanceWithPoitns.pop().point);
  }

  return result;
};