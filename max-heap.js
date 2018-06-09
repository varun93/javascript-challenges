const getMaxIndex = (array, i, j) => {
    return Math.max(array[i], array[j]) === array[i] ? i : j;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const getParentIndex = childIndex => {
    return Math.floor((childIndex - 1) / 2);
};

const isRootNode = index => {
    return index === 0;
};


const isEmpty = (element) => {
    return element === undefined || element === null;
}


const heapifyUp = (array, index) => {
    const parentIndex = getParentIndex(index);
    if (parentIndex >= 0 && array[index] > array[parentIndex]) {
        swap(array, index, parentIndex);
        heapifyUp(array, parentIndex);
    }
}


const heapifyDown = (array, index) => {
    const element = array[index];
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const leftChildElement = array[leftChildIndex];
    const rightChildElement = array[rightChildIndex];
    if (isEmpty(leftChildElement) && isEmpty(rightChildElement)) {
        return;
    }
    else {
        if (element < leftChildElement || element < rightChildElement) {
            const maxIndex = getMaxIndex(array, leftChildIndex, rightChildIndex);
            swap(array, index, maxIndex);
            heapifyDown(array, maxIndex);
        }
    }
}


// delete the root node
const deleteNode = (array) => {
    swap(array, 0, array.length - 1);
    array.length = array.length - 1;
    heapifyDown(array, 0)
}

const insertNode = (array, value) => {
    array.push(value);
    heapifyUp(array, array.length - 1)
}

const buildHeap = (array, element) => {
    for (let index = array.length - 1; index >= array.length / 2; index--) {
        heapifyUp(array, index);
    }

}

// const heap = [0, 1, 2, 3, 4, 5, 6];
// buildHeap(heap);
//insertNode(heap, 7);
//insertNode(heap, 8);
// insertNode(heap, 4);
// insertNode(heap, 6);
// insertNode(heap, 2);
// insertNode(heap, 3);
// console.log(heap);
// deleteNode(heap);
// deleteNode(heap);
// deleteNode(heap);
// console.log(heap);
// insertNode(heap, 2);
// insertNode(heap, 3);
console.log(heap);


