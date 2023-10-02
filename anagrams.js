const anagrams = (s1, s2) => {
    const frequency = {};
    let result = true
    
    if (s1.length !== s2.length) return false;
    
    for (let i = 0; i < s1.length; i++) {
      if (!frequency[s1[i]]) {
        frequency[s1[i]] = 1;
      } else {
        frequency[s1[i]] -= 1;
      }
    };
    
    for (let j = 0; j < s1.length; j++) {
      if (!frequency[s2[j]]) {
        frequency[s2[j]] = 1;
      } else {
        frequency[s2[j]] -= 1;
      }
    };
    
    Object.entries(frequency).forEach(([key, val]) => {
      if (val !== 0) {
        result = false;
      };
    });
    return result;
};

//Tests
console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('elbow', 'below')); // -> true
console.log(anagrams('tax', 'taxi')); // -> false
console.log(anagrams('taxi', 'tax')); // -> false
console.log(anagrams('night', 'thing')); // -> true
    