/**
  생성자 함수 패턴 사용

  인덱스와 배열을 활용하여 구현
 */
var MyQueue = function() {
  this.start = 0;
  this.end = 0;
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
  this.end = this.end + 1;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const tmp = this.stack[this.start];
  this.start = this.start + 1;
  return tmp;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[this.start];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.start === this.end ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */