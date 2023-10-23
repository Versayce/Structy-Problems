class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let indexCount = 0;
  let current = head;
  
  if (index === 0) {
      const newNode = new Node(value);
      newNode.next = current;
      return newNode;
  };
  
  while (current !== null) {
    if (indexCount === index - 1) {
      const newNode = new Node(value);
      const next = current.next;
      current.next = newNode;
      newNode.next = next;
    };
    current = current.next;
    indexCount++;
  }
  return head;
};


const insertNode = (head, value, index, indexCount = 0) => {
  if (index === 0) {
      const newNode = new Node(value);
      newNode.next = head;
      return newNode;
  };
  
  if (indexCount === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  };
  
  insertNode(head.next, value, index, indexCount + 1); 
  return head
};
