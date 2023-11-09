class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
    if (!root) return 0;
    let sum = 0;
    let stack = [root];
    
    while (stack.length !== 0) {
      const current = stack.pop();
      sum += current.val;
      
      current.right && stack.push(current.right)
      current.left && stack.push(current.left)
    }
    
    return sum;
  };
