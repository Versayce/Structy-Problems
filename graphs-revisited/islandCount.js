const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (findLand(grid, row, col, visited) === true) count++;
        };
    };
    return count;
};

const findLand = (grid, row, col, visited) => {
    //Define Bounds:
    const rowWithinBounds = 0 <= row && row < grid.length;
    const colWithinBounds = 0 <= col && col < grid[0].length;

    if (!rowWithinBounds || !colWithinBounds) return false;
    if (grid[row][col] === "W") return false;
    
    const coords = row + ',' + col;
    if (visited.has(coords)) return false;
    visited.add(coords); 

    findLand(grid, row, col - 1, visited);
    findLand(grid, row, col + 1, visited);
    findLand(grid, row - 1, col, visited);
    findLand(grid, row + 1, col, visited);

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
