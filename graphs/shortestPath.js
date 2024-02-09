const shortestPath = (edges, nodeA, nodeB) => {
    const graph = createGraph(edges);
    console.log('Built Gaph: ', graph);
};

const traversal = (graph, currentNode, visited) => {

};

const createGraph = (edges) => {
    const graph = {};

    for(let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    };
    return graph;
};

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
