class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isMaxHeap(node) {
    if (!node) {
      return true;
    }
  
    const leftChildValue = node.left ? node.left.value : -Infinity;
    const rightChildValue = node.right ? node.right.value : -Infinity;
  
    if (node.value >= leftChildValue && node.value >= rightChildValue) {
      return isMaxHeap(node.left) && isMaxHeap(node.right);
    }
  
    return false;
  }
  const root = new Node(10);
  root.left = new Node(8);
  root.right = new Node(7);
  root.left.left = new Node(6);
  root.left.right = new Node(5);
  root.right.left = new Node(4);
  
  console.log(isMaxHeap(root)); 
  