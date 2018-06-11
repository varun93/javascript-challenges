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

const getLeftChildIndex = (index) => {
    return index * 2 + 1;
}
const getRightChildIndex = (index) => {
    return index * 2 + 2;
}

const isRootNode = index => {
    return index === 0;
};

const isEmpty = (element) => {
    return element === undefined || element === null;
}

const heapifyUp = (array, index) => {
    index = index || array.length - 1;
    const parentIndex = getParentIndex(index);
    if (parentIndex >= 0 && array[index] > array[parentIndex]) {
        swap(array, index, parentIndex);
        heapifyUp(array, parentIndex);
    }
}

const heapifyDown = (array, index) => {
    const element = array[index];
    const leftChildIndex = getLeftChildIndex(index);
    const rightChildIndex = getRightChildIndex(index);
    const leftChildElement = array[leftChildIndex];
    const rightChildElement = array[rightChildIndex];
    let maxIndex = null;

    if (isEmpty(leftChildElement) && isEmpty(rightChildElement)) {
        return;
    }

    if (isEmpty(leftChildElement)) {
        maxIndex = rightChildIndex;
    }
    else if (isEmpty(rightChildElement)) {
        maxIndex = leftChildIndex;
    }
    else {
        maxIndex = getMaxIndex(array, leftChildIndex, rightChildIndex);
    }

    if (element <= leftChildElement || element < rightChildElement) {
        swap(array, index, maxIndex);
        heapifyDown(array, maxIndex);
    }

}

const deleteNode = (array) => {
    swap(array, 0, array.length - 1);
    array.length = array.length - 1;
    heapifyDown(array, 0);
}

const insertNode = (array, value) => {
    array.push(value);
    heapifyUp(array)
}

const buildHeap = (array, element) => {
    for (let index = Math.floor(array.length / 2); index <= array.length - 1; index++) {
        heapifyUp(array, index);
    }

    // for (let index = Math.floor(array.length / 2); index >= 0; index--) {
    //     heapifyDown(array, index);
    // }
}


const heapSort = (array) => {
    buildHeap(array);
    const sortedArray = [];
    while (array.length > 0) {
        swap(array, 0, array.length - 1);
        sortedArray[array.length - 1] = array[array.length - 1];
        array.length = array.length - 1;
        heapifyDown(array, 0);
    }

    array.push(...sortedArray);
    sortedArray.length = 0;
}

// Arr[ N/2+1 ] to Arr[ N ] are the leaf nodes

const array = [4, 1, 5, 3, 0, 2, 6];
// heapSort(array);
// buildHeap(array);
// const heap = [6, 4, 5, 3, 1, 0, 2];
// deleteNode(array);
// const heap = [];
// const heap = [6, 3, 4, 1, 2];
// insertNode(heap, 7);
// insertNode(heap, 8);
// insertNode(heap, 4, heap.length);
// insertNode(heap, 6, heap.length);
// insertNode(heap, 2, heap.length);
// insertNode(heap, 3, heap.length);
// console.log(heap);
// deleteNode(array);
// deleteNode(array);
// deleteNode(array);
// console.log(array);
// insertNode(array, 2);
// insertNode(array, 3);
console.log(array);


