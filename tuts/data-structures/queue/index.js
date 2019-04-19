class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = -1;
    this.tail = -1;
    this.queue = [];
  }

  size() {
    if (this.isEmpty()) return 0;
    return this.tail - this.head + 1;
  }

  isFull() {
    return this.tail === this.capacity - 1;
  }

  isEmpty() {
    return this.head === -1;
  }

  peek() {
    if (this.isEmpty()) {
      return "Empty";
    }
    return this.queue[this.head];
  }

  enqueue(value) {
    if (this.isFull()) {
      return;
    }
    if (this.head === -1) {
      this.queue[++this.head] = value;
      this.tail = this.head;
      return;
    }
    this.queue[++this.tail] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Empty";
    }
    const front = this.queue[this.head++];
    if (this.head > this.tail) {
      this.head = -1;
      this.tail = -1;
    }
    return front;
  }

  print() {
    for (let index = this.head; index <= this.tail; index++) {
      console.log(this.queue[index]);
    }
  }
}

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
//
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();

// console.log(queue.size());
