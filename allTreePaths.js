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

//TESTS
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// allTreePaths(a); // ->
// // [ 
// //   [ 'a', 'b', 'd' ], 
// //   [ 'a', 'b', 'e' ], 
// //   [ 'a', 'c', 'f' ] 
// // ] 
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');
// const i = new Node('i');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;

// //         a
// //      /    \
// //     b      c
// //   /  \      \
// //  d    e      f
// //      / \    /   
// //     g  h   i 

// allTreePaths(a); // ->
// // [ 
// //   [ 'a', 'b', 'd' ], 
// //   [ 'a', 'b', 'e', 'g' ], 
// //   [ 'a', 'b', 'e', 'h' ], 
// //   [ 'a', 'c', 'f', 'i' ] 
// // ] 
// const q = new Node('q');
// const r = new Node('r');
// const s = new Node('s');
// const t = new Node('t');
// const u = new Node('u');
// const v = new Node('v');

// q.left = r;
// q.right = s;
// r.right = t;
// t.left = u;
// u.right = v;

// //      q
// //    /   \ 
// //   r     s
// //    \
// //     t
// //    /
// //   u
// //  /
// // v

// allTreePaths(q); // ->
// // [ 
// //   [ 'q', 'r', 't', 'u', 'v' ], 
// //   [ 'q', 's' ] 
// // ] 
// const z = new Node('z');

// //      z

// allTreePaths(z); // -> 
// // [
// //   ['z']
// // ]
