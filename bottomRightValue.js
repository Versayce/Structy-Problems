//  Time Complexity: O(n) assuming all queue operations are O(1) 
//  Space Complexity O(n)
const bottomRightValue = (root) => {
    let queue = [root]; //Creating a queue with the root value which will be the starting point of breadth first search
    let current; 
    while(queue.length > 0) {
      current = queue.shift() //Removing element from the end of the queue for checking 
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    
      return current.val
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


//TESTS 
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \       
//    -2  6

console.log(bottomRightValue(a)); // -> 6


// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(6);
// const i = new Node(7);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     / \    /   
// //    -2  6  7 

// bottomRightValue(a); // -> 7
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.right = d;
// d.left = e;
// e.right = f;

// //      a
// //    /   \ 
// //   b     c
// //    \
// //     d
// //    /
// //   e
// //   \
// //    f
          
// bottomRightValue(a); // -> 'f'
// const a = new Node(42);

// //      42

// bottomRightValue(a); // -> 42
