const largestComponent = (graph) => {
    let largest = 0;
    const visited = new Set();
    for (let node in graph) {
        const size = traversal(graph, node, visited);
        if (size > largest) largest = size;
    };
    
    return largest;
};
  
const traversal = (graph, currentNode, visited) => {
    if (visited.has(currentNode)) return 0;
    visited.add(currentNode);
    let size = 1;
    for (let neighbor of graph[currentNode]) {
        size += traversal(graph, neighbor, visited);
    };
    
    return size;
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
})); // -> 4

// console.log(largestComponent({
//     1: ['2'],
//     2: ['1','8'],
//     6: ['7'],
//     9: ['8'],
//     7: ['6', '8'],
//     8: ['9', '7', '2']
// })); // -> 6
