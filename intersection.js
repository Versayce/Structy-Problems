const intersection = (a, b) => {
    const frequency =  new Set(a);
    const result = [];
    
    b.forEach(num => { 
      if (frequency.has(num)) result.push(num) 
    });
    
    return result;
  };
  
console.log(intersection([4,2,1,6], [3,6,9,2,10]))
