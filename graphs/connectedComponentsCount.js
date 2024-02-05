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
