const connectedComponentsCount = (graph) => {
    let count = 0;
    const visited = new Set();
    for (let node in graph) {
      if (traversal(graph, node, visited) === true) {
        count++;
      };
    }
    
    return count;
  };
  
  const traversal = (graph, currentNode, visited) => {
    if (visited.has(String(currentNode))) return false;
    visited.add(String(currentNode));
    for (let neighbor of graph[currentNode]) {
      traversal(graph, neighbor, visited);
    };
    return true
  }


  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }); // -> 2
