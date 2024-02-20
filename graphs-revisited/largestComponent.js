const largestComponent = (graph) => {
    if (!graph) return 0;
    const visited = new Set();
    let largest = 0;
    for (node in graph) {
        const componentSize = traversal(graph, node, visited);
        if ( componentSize > largest) {
            largest = componentSize;
        };
    };
    return largest;
};

const traversal = (graph, src, visited) => {
    if (visited.has(String(src))) return 0
    visited.add(String(src));
    let size = 1;
    for (neighbor of graph[src]) {
        size += traversal(graph, neighbor, visited);  
    };
    return size;
};

// //Tests
// largestComponent({
//     0: ['8', '1', '5'],
//     1: ['0'],
//     5: ['0', '8'],
//     8: ['0', '5'],
//     2: ['3', '4'],
//     3: ['2', '4'],
//     4: ['3', '2']
//   }); // -> 4

//   largestComponent({
//     1: ['2'],
//     2: ['1','8'],
//     6: ['7'],
//     9: ['8'],
//     7: ['6', '8'],
//     8: ['9', '7', '2']
//   }); // -> 6

//   largestComponent({
//     3: [],
//     4: ['6'],
//     6: ['4', '5', '7', '8'],
//     8: ['6'],
//     7: ['6'],
//     5: ['6'],
//     1: ['2'],
//     2: ['1']
//   }); // -> 5

//   largestComponent({}); // -> 0

//   largestComponent({
//     0: ['4','7'],
//     1: [],
//     2: [],
//     3: ['6'],
//     4: ['0'],
//     6: ['3'],
//     7: ['0'],
//     8: []
//   }); // -> 3
