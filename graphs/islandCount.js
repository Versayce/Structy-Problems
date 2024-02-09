const islandCount = (grid) => {
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[0].length; c++) {
        explore(grid, row, col);
      };
    };
  };
  
  const explore = (grid, row, col) => {
    
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
