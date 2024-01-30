class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root) => {
    const levels = [];
    assignLevels(root, levels, 0)
  };
  
  const assignLevels = (root, array, levelIndex) = {
    if (root === null) return;
    
    if (!levels[levelIndex]) {
      levels.push([root.val]);
    } else {
      levels[levelIndex].push(root.val)
    };
    
    fillLevels(root.left, levels, levelIndex + 1);
    fillLevels(root.right, levels, levelIndex + 1);
  };
