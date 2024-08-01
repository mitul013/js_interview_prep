// NOTE: top++ and --top where to use prefix and postfix

// push
// pop
// peek
// isEmpty
// clear
export function Stack() {
  console.log("hello");
  let arr = [];
  let top = 0;
  this.push = function (val) {
    arr[top++] = val;
  };
  this.pop = function () {
    if (top > 0) return arr[--top];
    else throw new Error("underflow");
  };
  this.peek = function () {
    if (top > 0) return arr[top - 1];
    else throw new Error("underflow");
  };
  this.isEmpty = function () {
    return top == 0;
  };
  this.clear = function () {
    top = 0;
  };
  this.size = function () {
    return top;
  };
}

// var stack = new Stack(); //creating new instance of Stack
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.size());
// stack.clear();
// console.log(stack.isEmpty());
