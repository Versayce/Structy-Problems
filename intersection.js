const intersection = (a, b) => {
    const frequency =  new Set();
    const result = [];
    
    if (a.length < b.length) {
      a.forEach(num => {
        frequency.add(num);
      });
      b.forEach(num => {
        if (frequency.has(num)) {
          result.push(num);
        };
      });
    } else {
      b.forEach(num => {
        frequency.add(num);
      });
      a.forEach(num => {
        if (frequency.has(num)) {
          result.push(num);
        };
      });
    };
    return result;
  };
  
console.log(intersection([4,2,1,6], [3,6,9,2,10]))
