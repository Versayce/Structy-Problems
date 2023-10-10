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

// const linkedListValues = (head) => {
//   const result = [];
//   _linkedListValues(head, result);
//   return result;
// };

// const _linkedListValues = (head, result) => {
//   if (head === null) return;
//   result.push(head.val);
//   _linkedListValues(head.next, result);
// };

const linkedListValues = (head) => {
    const result = [];
    while (head !== null) {
      result.push(head.val)
      head = head.next;
    }
    console.log(result);
    return result;
}
 linkedListValues(a);
