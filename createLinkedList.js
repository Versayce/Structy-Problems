class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  if (values.length === 0) return null;
  const head = new Node();
  let current = head;
  let i = 0;
  while (i < values.length) {
    current.next = new Node(values[i])
    current = current.next;
    i++;
  };
  return head.next;
};

//Tests:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8
