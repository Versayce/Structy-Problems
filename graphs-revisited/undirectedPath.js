const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = graphMaker(edges);
    return traverse(graph, nodeA, nodeB, visited = new Set());
};

const traverse = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (traverse(graph, neighbor, dst, visited) === true) return true;
    };
    return false;
 };

const graphMaker = (edges) => {
    const graph = {};
    edges.forEach(edge => {
        const [a, b] = edge;
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    });
    return graph;
};
