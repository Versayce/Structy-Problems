const minimumIsland = (grid) => {
    const visited = new Set();
    let smallestIslandSize = Infinity;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const islandSize = exploreGraph(grid, row, col, visited)
            if (islandSize > 0 && islandSize < smallestIslandSize) {
            smallestIslandSize = islandSize;
            }
        }
    }
    
    return smallestIslandSize;
};
  
const exploreGraph = (grid, row, col, visited, smallestIslandSize) => {
    const rowInBounds = 0 <= row && row < grid.length;
    const colInBounds = 0 <= col && col < grid[0].length;
    if (!rowInBounds || !colInBounds) return 0;
    if (grid[row][col] === 'W') return 0; 

    const currentCoords = row + ',' + col;
    if (visited.has(currentCoords)) return 0;
    visited.add(currentCoords);

    let islandSize = 1;
    islandSize += exploreGraph(grid, row - 1, col, visited);
    islandSize += exploreGraph(grid, row + 1, col, visited);
    islandSize += exploreGraph(grid, row, col - 1, visited);
    islandSize += exploreGraph(grid, row, col + 1, visited);

    return islandSize;
}


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2



// const grid = [
//     ['L', 'W', 'W', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['W', 'L', 'W', 'L', 'W'],
//     ['W', 'W', 'W', 'W', 'W'],
//     ['W', 'W', 'L', 'L', 'L'],
// ];

// console.log(minimumIsland(grid)); // -> 1



// const grid = [
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
//     ['L', 'L', 'L'],
// ];

// console.log(minimumIsland(grid)); // -> 9
