const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for (let row = 0; row < grid.length; row++){
      for (let col = 0; col < grid[0].length; col++) {
        if (explore(grid, row, col, visited) === true) count++;
      };
    };
    return count;
  };
  
const explore = (grid, row, col, visited) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;
    if (!rowInBounds || !colInBounds) return false;
    if (grid[row][col] === 'W') return false;
    
    const currentCoords = row + ',' + col;
    if (visited.has(currentCoords)) return false;
    visited.add(currentCoords);
    
    explore(grid, row - 1, col, visited);
    explore(grid, row + 1, col, visited);
    explore(grid, row, col - 1, visited);
    explore(grid, row, col + 1, visited);
    
    return true;
};


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3


// const grid = [
//     ['L', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['W', 'L', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'W', 'W'],
//     ['W', 'W', 'L', 'L', 'L'],
// ];

// console.log(islandCount(grid)); // -> 4
