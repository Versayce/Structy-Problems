const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);
    const distances = {};
    
    for (let course in graph) {
      if (graph[course].length === 0) distances[course] = 1;
    }
    
    for (let course in graph) {
      traversal(graph, course, distances)
    }
    
    return Math.max(...Object.values(distances))
  };
  
  const buildGraph = (numCourses, prereqs) => {
    const graph = {};
    
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    
    for (let prereq of prereqs) {
      const [a, b] = prereq;
      graph[a].push(b);
    }
    return graph;
  }
  
  const traversal = (graph, currentNode, distances) => {
    if (currentNode in distances) return distances[currentNode];
    
    let maxDistance = 0;
    for (let neighbor of graph[currentNode]) {
      const distanceFromNeighbor = traversal(graph, neighbor, distances);
      if (distanceFromNeighbor > maxDistance) maxDistance = distanceFromNeighbor;
    }
    distances[currentNode] = maxDistance + 1;
    return distances[currentNode];
  };
