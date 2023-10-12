class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

// //Standard:
// const getNodeValue = (head, index) => {
//     let idxCounter = 0;
//     while (head !== null) {
//       if (idxCounter === index) return head.val;
//       idxCounter += 1;
//       head = head.next;
//     }
//     return null
// };

//Recursive
const getNodeValue = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    getNodeValue(head.next, index - 1);
};
