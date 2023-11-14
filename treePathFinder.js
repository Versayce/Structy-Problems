class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];
    
    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
      return leftPath;
    };
    
    const rightPath = pathFinderHelper(root.right, target);
    if (rightPath !== null) {
      rightPath.push(root.val);
      return rightPath;
    };
    
    return null;
  };
  
  const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
      return null;
    } else {
      return result.reverse();
    }
  }
  
  