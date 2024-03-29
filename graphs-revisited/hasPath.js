const hasPath = (graph, src, dst) => {
    const stack = [src];

    while (stack.length > 0) {
        const current = stack.pop();
        if (current === dst) return true
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        };
    };
    return false;
};

const hasPathRecursive = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPathRecursive(graph, neighbor, dst) === true) return true;
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPathRecursive(graph, 'f', 'j')); // false

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(hasPath(graph, 'f', 'k')); // true

// const graph = {
//     v: ['x', 'w'],
//     w: [],
//     x: [],
//     y: ['z'],
//     z: [],  
// };

// console.log(hasPath(graph, 'v', 'z')); // false
