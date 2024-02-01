const depthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log("current node:", current); 
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        };
    };
};

const depthFirstRecursive = (graph, source) => {
    console.log("recursive source: ", source)
    for (let neighbor of graph[source]) {
        depthFirstRecursive(graph, neighbor)
    };
};

const breadthFirstTraversal = (graph, sourceNode) => {
    const queue = [sourceNode];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log("current element bft:", current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    };
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// depthFirstPrint(graph, 'a');
// depthFirstRecursive(graph, 'a');
breadthFirstTraversal(graph, 'a')
