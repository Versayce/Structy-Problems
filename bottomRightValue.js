const bottomRightValue = (root) => {
    let queue = [root]; //Creating a queue with the root value which will be the starting point of breadth first search
    let current; 
    while(queue.length > 0) {
      current = queue.shift() //Removing element from the end of the queue for checking 
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    
      return current.val
  };


//  Time Complexity: O(n) assuming all queue operations are O(1) 
//  Space Complexity O(n)
