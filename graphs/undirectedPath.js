const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = edgesToGraph(edges);
    
  };
  
  const edgesToGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
      if (!graph[edge[0]]) {graph[edge[0]] = []};
      if (!graph[edge[1]]) {graph[edge[1]] = []};
      if (graph[edge[0]]) {
        graph[edge[0]].push(edge[1])
      };
      if (graph[edge[1]]) {
        graph[edge[1]].push(edge[0])
      };
    };
    return graph;
  };
