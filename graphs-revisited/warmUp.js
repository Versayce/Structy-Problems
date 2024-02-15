const depthFirstSearch = (graph, start) => {
    const stack = [start];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const breadthFirstSearch = (graph, start) => {
    const queue = [start];

    while (queue.length > 0) {
        const current = queue.pop();
        console.log(current);

        for(let neighbor of graph[current]) {
            queue.unshift(neighbor);
        };
    };
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

const depthFirstSearchRecursive = (graph, start) => {
    console.log(start);
    for (let neighbor of graph[start]) {
        depthFirstSearchRecursive(graph, neighbor);
    }
};

// depthFirstSearch(graph, 'a');
// // a
// // c
// // e
// // b
// // d
// // f

// breadthFirstSearch(graph, 'a');
// // a
// // b
// // c
// // d
// // e
// // f

depthFirstSearchRecursive(graph, 'a');
// a
// b
// d
// f
// c
// e
