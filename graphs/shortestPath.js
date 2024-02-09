const shortestPath = (edges, nodeA, nodeB) => {};

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
console.log(shortestPath(edges, 'w', 'z')); // -> 2

// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ];
// console.log(shortestPath(edges, 'y', 'x')); // -> 1
