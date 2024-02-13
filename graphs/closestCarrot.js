const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set([startRow + ',' + startCol]);                                  //0 = starting value of our count
    const queue = [[startRow, startCol, 0]];
    
    while (queue.length > 0) {
      const [row, col, distance] = queue.shift();
      if (grid[row][col] === "C") return distance;
      
      const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (let delta of deltas) {
        const [rowDelta, colDelta] = delta;
        const neighborRow = row + rowDelta;
        const neighborCol = col + colDelta;
        const rowInBounds = 0 <= neighborRow && neighborRow < grid.length;
        const colInBounds = 0 <= neighborCol && neighborCol < grid[0].length;
        const currentPos = neighborRow + ',' + neighborCol;
        if (rowInBounds && colInBounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(currentPos)) {
          queue.push([neighborRow, neighborCol, distance + 1]);
          visited.add(currentPos)
        };
      };
    };
    
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

//   const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
//   ];
  
//   console.log(closestCarrot(grid, 0, 0)); // -> 5

//   const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
//   ];
  
//   console.log(closestCarrot(grid, 1, 4)); // -> 2


//   const grid = [
//     ['O', 'O', 'X', 'O', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['O', 'X', 'C', 'C', 'O'],
//   ];
  
//   console.log(closestCarrot(grid, 2, 0)); // -> -1


//   const grid = [
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
//     ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
//   ];
  
//   console.log(closestCarrot(grid, 0, 0)); // -> -1

//   const grid = [
//     ['O', 'O', 'X', 'C', 'O'],
//     ['O', 'X', 'X', 'X', 'O'],
//     ['C', 'X', 'O', 'O', 'O'],
//   ];
  
//   console.log(closestCarrot(grid, 2, 2)); // -> 5
