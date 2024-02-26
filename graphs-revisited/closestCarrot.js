const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([startRow + "," + startCol]);
    const queue = [[startRow, startCol, 0]];

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();
        if (grid[row][col] === "C") return distance;

        //Defining directions to move to reach neighboring nodes:
        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let delta of deltas) {
            const [rowDelta, colDelta] = delta;
            //Defining neighboring row and col:
            const neighborRow = row + rowDelta;
            const neighborCol = col + colDelta;
            //Defining bounds so we don't extend outside of the graph area:
            const rowWithinBounds = 0 <= neighborRow && neighborRow < grid.length
            const colWithinBounds = 0 <= neighborCol && neighborCol < grid[0].length
            //Defining our current position as a string to add to our visited set:
            const currentPos = neighborRow + ',' + neighborCol;
            if (!visited.has(currentPos) && rowWithinBounds && colWithinBounds && grid[neighborRow][neighborCol] !== "X") {
                queue.push([neighborRow, neighborCol, distance + 1]);
                visited.add(currentPos);
            }
        }
    }
    return -1;
};


const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
];
  
console.log(closestCarrot(grid, 1, 2)); // -> 4

const grid2 = [
    ['O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'C', 'C', 'O'],
];
  
console.log(closestCarrot(grid2, 2, 0)); // -> -1
