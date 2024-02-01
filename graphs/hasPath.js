const hasPath = (graph, src, dst) => {
    const queue = [src]
    while (queue.length > 0) {
        const current = queue.shift();
        for (let neighbor of graph[current]) {
            if (neighbor === dst) return true
            queue.push(neighbor);
        }
    }
    return false
};

const hasPathRecursive = (graph, src, dst) => {
    if (src === dst) return true;
    
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) return true
    };
    
    return false;
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
const src = 'a'
const dst = 'f'

console.log(hasPathRecursive(graph, src, dst))
