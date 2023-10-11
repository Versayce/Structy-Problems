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


// const linkedListFind = (head, target) => {
//     while (head !== null) {
//         if (head.val === target) {
//             console.log(true);
//             return true;
//         };
//         head = head.next;
//     };
//     console.log(false);
//     return false;
// };


const linkedListFind = (head, target) => {
    if (head === null) {
        console.log(false);
        return false
    };
    if (head.val === target) {
        console.log(true);
        return true
    };
    return linkedListFind(head.next, target);
};

linkedListFind(a, "c");
linkedListFind(a, "d");
linkedListFind(a, "q");
