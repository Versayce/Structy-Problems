const longestPath = (graph) => {
    const distances = {};
    
    for (let node in graph) {
      if (graph[node].length === 0) {
        distances[node] = 0;
      }
    };
    
    for (let node in graph) {
      traverseDistance(graph, node, distances);
    }
    
    return Math.max(...Object.values(distances))
  };
  
  const traverseDistance = (graph, node, distances) => {
    if (node in distances) return distances[node];
    
    let maxLength = 0;
    for (let neighbor of graph[node]) {
      const attempt = traverseDistance(graph, neighbor, distances);
      if (attempt > maxLength) maxLength = attempt;
    }
    
    distances[node] =  maxLength + 1;
    return distances[node];
  }
