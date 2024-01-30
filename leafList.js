// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
    if (root === null) return [];
    const leaves = [];
    const stack = [root];
    
    while (stack.length !== 0) {
      const current = stack.pop();
      if (current.left === null && current.right === null) leaves.push(current.val);
      if (current.right !== null) stack.push(current.right);
      if (current.left !== null) stack.push(current.left);
    };
    
    console.log(leaves)
    return leaves;
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

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ] 
