const pairSum = (numbers, targetSum) => {
    let checkedNums = new Map();
    let i = 0;
    
    while (i < numbers.length) {
      const complement = targetSum - numbers[i]
      if (checkedNums.has(complement)) {
        return [i, checkedNums.get(complement)];
      };
      checkedNums.set(numbers[i], i);
      i++;
    }
};
  
console.log(pairSum([3, 2, 5, 4, 1], 8))
