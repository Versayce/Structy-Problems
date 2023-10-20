class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const isUnivalueList = (head) => {
//   let headStart = head.val;
//   while (head !== null) {
//     if (headStart !== head.val) {
//       return false
//     } else {
//       head = head.next;
//     }
//   }
//   return true
// };

const isUnivalueList = (head, previousHead = null) => {
    if (head === null) return true;
    if (previousHead !== null && head.val !== previousHead) return false
    return isUnivalueList(head.next, head.val);
};




//Tests 

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// // 7 -> 7 -> 7

// isUnivalueList(a); // true


const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

console.log(isUnivalueList(a)); // false
