class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// const current_level = parent_level + 1;
const listNodesAtLevel = (root, level) => {
  const list = [];
  const queue = [];
};

//can do via bfs too
const countSum = root => {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  const { children } = root;

  sum = sum + root.value;

  for (let index = 0; index < children.length; index++) {
    sum += countSum(children[index]);
  }

  return sum;
};

const leavesCount = root => {
  if (root === null) return 0;

  let count = 0;

  const { children } = root;

  if (children.length === 0) return 1;

  for (let index = 0; index < children.length; index++) {
    count += leavesCount(children[index]);
  }
  return count;
};

const leavesCountBfs = root => {
  const queue = [];
  let leavesCount = 0;
  queue.push(root);
  while (queue.length) {
    const front = queue.shift();
    const { children } = front;
    if (children.length === 0) {
      leavesCount++;
    } else {
      children.forEach(child => {
        queue.push(child);
      });
    }
  }

  return leavesCount;
};

const root = new Node(2);

const children = [];

const one = new Node(3);
const two = new Node(4);
const three = new Node(5);

children.push(one);
children.push(two);
children.push(three);

root.children = children;

console.log(countSum(root));
