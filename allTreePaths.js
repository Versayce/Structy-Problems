class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [[root.val]];
    const paths = [];
    
    const leftPaths = allTreePaths(root.left);
    for (let subPath of leftPaths) {
      paths.push([root.val, ...subPath]);
    }
      
    const rightPaths = allTreePaths(root.right);
    for (let subPath of rightPaths) {
      paths.push([root.val, ...subPath]);
    }
    
    return paths;
  };
