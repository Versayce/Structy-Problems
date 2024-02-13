const closestCarrot = (grid, startRow, startCol) => {

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
