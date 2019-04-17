class Stack {
  constructor(capacity = 5) {
    this.top = -1;
    this.data = new Array(capacity);
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.data.length;
  }

  push(value) {
    if (this.isFull()) {
      return;
    }
    this.data[++this.top] = value;
  }

  pop() {
    if (this.isEmpty()) {
      return false;
    }
    return this.data[this.top--];
  }

  peek() {
    return this.data[this.top];
  }
}

const stack = new Stack(5);
stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.peek());
stack.push(4);
console.log(stack.peek());
stack.push(5);
console.log(stack.peek());
