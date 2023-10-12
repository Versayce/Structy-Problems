class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const removeNode = (head, target) => {
    let prev = null;
    let current = head; 
    if (head.val === target) console.log(head.next);
    while (current !== null) {
        if (current.val === target) {
            prev.next = current.next;
            break;
        };

        prev = current;
        current = current.next;
    };
    console.log(head);
    return head;
};


// removeNode(a, "c");
// // a -> b -> d -> e -> f
// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");

// x.next = y;
// y.next = z;

const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

removeNode(node1, "i");
// r -> s
