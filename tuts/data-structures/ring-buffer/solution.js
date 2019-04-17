class RingBuffer {
  constructor() {
    this.head = -1;
    this.tail = -1;
    this.size = 7;
    this.buffer = [];
  }
  read() {
    if(this.tail)
  }
  write(data) {
    this.head = (this.head + 1) % this.size;
     
  }
}

const ringBuffer = new RingBuffer();
ringBuffer.write(1);
