class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const insert = (root, value) => {
  if (root === null) {
    return new Node(value);
  }

  if (value <= root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
};

const deleteNode = (root, value) => {
  if (root === null) return null;

  if (value < root.value) {
    root.left = deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = deleteNode(root.right, value);
  } else {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left === null && root.right) {
      return root.right;
    } else if (root.right === null && root.left) {
      return root.left;
    } else {
      let nextHighestNode = root.right;
      while (nextHighestNode && nextHighestNode.left) {
        nextHighestNode = nextHighestNode.left;
      }
      root.value = nextHighestNode.value;
      root.right = deleteNode(nextHighestNode, nextHighestNode.value);
    }
  }

  return root;
};

const height = root => {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
};

const size = root => {
  if (root === null) {
    return 0;
  }
  return 1 + size(root.left) + size(root.right);
};

//preorder traversals
const preorder = root => {
  if (root === null) return null;

  console.log(root.value);
  if (root.left) inorder(root.left);
  if (root.right) inorder(root.right);
};
//inorder traversals
const inorder = root => {
  if (root === null) return null;

  if (root.left) inorder(root.left);
  console.log(root.value);
  if (root.right) inorder(root.right);
};
// postorder traversals
const postorder = root => {
  if (root === null) return null;

  if (root.left) inorder(root.left);
  if (root.right) inorder(root.right);
  console.log(root.value);
};

let root = null;
root = insert(root, 2);
insert(root, 1);
insert(root, 3);
insert(root, 4);

// deleteNode(root, 4);
// deleteNode(root, 3);
// deleteNode(root, 4);

// console.log(root);

// insert(Object.create(root), 4);
// console.log(root);
//
console.log(size(Object.create(root)));
// console.log(root.right.value);
