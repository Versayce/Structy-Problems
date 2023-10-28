class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const addLists = (head1, head2) => {
  const answer = new Node(null);
  let result = answer;
  
  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  while (current1 !== null || current2 !== null || carry !== 0) {
    let val1 = current1 === null ? 0 : current1.val;
    let val2 = current2 === null ? 0 : current2.val;
    let sum = val1 + val2 + carry; 
    carry = sum > 9 ? 1 : 0;
    
    const digit = sum % 10;
    result.next = new Node(digit);
    result = result.next;
    
    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next; 
  };
  
  return answer.next;
};
