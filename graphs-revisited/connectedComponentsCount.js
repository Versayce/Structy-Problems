const connectedComponentsCount = (graph) => {
    let count = 0;
    let visited = new Set();
    for (node in graph) {
        console.log(node);
        if ((traversal(graph, node, visited) === true)) count++;
    };
    return count;
};

const traversal = (graph, currentNode, visited) => {
    if (visited.has(String(currentNode))) return false;
    visited.add(String(currentNode));
    for (neighbor of graph[currentNode]) {
        traversal(graph, neighbor, visited);
    }
    return true;
}



//Tests
console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2

console.log(connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
})); // -> 1


console.log(connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
})); // -> 3

console.log(connectedComponentsCount({})); // -> 0

console.log(connectedComponentsCount({
    0: [4,7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
})); // -> 5
