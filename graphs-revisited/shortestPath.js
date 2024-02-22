const shortestPath = (edges, nodeA, nodeB) => {
    const graph = makeGraph(edges);
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];
    
    while (queue.length > 0) {
        const [currentNode, distance] = queue.shift();
        if (currentNode === nodeB) return distance;

        for (let neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        };
    };

    return -1;
};

const makeGraph = (edges) => {
    let graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
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
