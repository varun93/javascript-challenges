const insert = (array, index, element) => {

    let runner = array.length - 1;

	while (runner >= index) {
        array[runner + 1] = array[runner];
        runner--;
    }

    array[index] = element;
}


const priorityQueue = (array, element, start, end) => {

    start = start || 0;
    end = end || array.length - 1;

    if (start > end) {
        insert(array, end + 1, element);
        return;
    }

    const mid = Math.floor(start + (end - start) / 2);
    const midElement = array[mid];

    if (element >= midElement) {
        if (element < array[mid - 1]) {
            insert(array, mid, element);
            return;
        }
        return priorityQueue(array, element, start, mid - 1);
    }

    if (element < midElement) {
        if (element >= array[mid + 1]) {
            insert(array, mid + 1, element);
            return;
        }
        return priorityQueue(array, element, mid + 1, end);
    }

}

const priorityQueueWithLinearSearch = (array, element) => {
    let i = array.length - 1;
    while (element >= array[i]) {
        i--;
    }
    insert(array, i + 1, element)
}

const array = [];

priorityQueue(array, 4);
priorityQueue(array, 8);
priorityQueue(array, 1);
priorityQueue(array, 7);
priorityQueue(array, 3);

console.log(array);
