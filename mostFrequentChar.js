const mostFrequentChar = (s) => {
    let frequency = {};
    let mostFrequent = undefined;
    
    for (char of s) {
      if (!frequency[char]) frequency[char] = 1;
      else frequency[char] += 1;
    };
    
    Object.entries(frequency).map(([key, val]) => {
      if (!mostFrequent) mostFrequent = key;
      else if (val > frequency[mostFrequent]) mostFrequent = key;
    });
    return mostFrequent;
  };

console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato')); // -> 'o'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar("riverbed")); // -> 'r'
