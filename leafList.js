// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
    const levels = [];
    assignLevels(root, levels, 0);
    console.log(levels[levels.length-1])
    return levels[levels.length-1]
  };
  
  const assignLevels = (root, levels, levelIndex) => {
    if (root === null) return [];
    
    if (!levels[levelIndex]) {
      levels.push([root.val]);
    } else {
      levels[levelIndex].push(root.val)
    };
    
    assignLevels(root.left, levels, levelIndex + 1);
    assignLevels(root.right, levels, levelIndex + 1);
  };
