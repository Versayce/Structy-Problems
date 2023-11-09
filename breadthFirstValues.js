class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  if (!root) return [];
  let queue = [root];
  let vals = [];

  while (queue.length > 0) {
    const current = queue.pop();
    vals.push(current.val);

    if (current.left !== null) queue.unshift(current.left);
    if (current.right !== null) queue.unshift(current.right);
  }

  return vals;
};
