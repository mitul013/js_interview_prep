import { Stack } from "./stack";
console.log("inside...");
function Queue() {
  console.log("queue");
  const stack1 = new Stack();
  const stack2 = new Stack();

  this.enqueue = function (val) {
    while (!stack1.isEmpty()) {
      stack2.push(stack1.pop());
    }
    stack2.push(val);
    while (!stack2.isEmpty()) {
      stack1.push(stack2.pop());
    }
  };
  this.dequeue = function () {
    return stack1.pop();
  };
  this.front = function () {
    return stack1.peek();
  };
  this.peek = this.front;
  this.size = function () {
    return stack1.size();
  };
  this.isEmpty = function () {
    return stack1.isEmpty();
  };
  this.clear = function () {
    stack1.clear();
    stack2.clear();
  };
}
console.log("========== QUEUE ===========");
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
