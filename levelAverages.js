class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
    const levels = [];
    const lvlAvgs = [];
    fillLevels(root, levels, 0);
    
    return levels.map(calcAvg);
  };
  
  const calcAvg = (array) => {
    let sum = 0;
    array.forEach(number => {
      sum += number;
    });
    
    return sum/array.length
  };
  
  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return;
    
    if (!levels[levelNum]) {
      levels.push([root.val]);
    } else {
      levels[levelNum].push(root.val)
    };
    
    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
  };
