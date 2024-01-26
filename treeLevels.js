class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Runtime Complexity: O(n)
// Space Complexity: O(n)
const treeLevels = (root) => {
    let stack = [[root, 0]];
    let levels = [];
    
    while (stack.length !== 0) {
      if (root === null) return []
      const current = stack.pop();
      if (!levels[current[1]]) levels[current[1]] = []
      levels[current[1]].push(current[0].val);  
      if (current[0].right) stack.push([current[0].right, current[1] + 1]);
      if (current[0].left) stack.push([current[0].left, current[1] + 1]);
      console.log(stack)
    }
    
    return levels;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
