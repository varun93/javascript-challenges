const swap = (heap, aIndex, bIndex) => {
  const temp = heap[aIndex];
  heap[aIndex] = heap[bIndex];
  heap[bIndex] = temp;
};

const insert = (heap, element) => {
  const parentIndex = Math.floor((index - 1) / 2);
  let swapIndex = null;

  heap[index] = element;

  if (heap[parentIndex] !== undefined && heap[parentIndex] < heap[index]) {
    swap(heap, parentIndex, index);
    swapIndex = index;
  }

  if (swapIndex) {
    insert(heap, swapIndex, heap[swapIndex]);
  }
};

const heap = [];
insert(heap, 2);
insert(heap, 1);
insert(heap, 5);
insert(heap, 9);

console.log(heap);
