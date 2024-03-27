//Time complexity: O(n + m)
//Space complexity: O(n)


const longestPath = (graph) => {
  //Storing an array of nodes with distance values so we can instantly check how many edges away from the end in a directed graph
  const distances = {};

  //Looping to find our end nodes and assign them an initial length value of 0
  for (let node in graph) {
    if (graph[node].length === 0) {
      distances[node] = 0;
    }
  }

  for (let node in graph) {
    //recursive traversal start call
    traverseDistance(graph, node, distances);
  }

  //finding the max value from our distances object to return as answer
  return Math.max(...Object.values(distances));
};

//Helper traversal function
const traverseDistance = (graph, node, distances) => {
  //base case checking if the node exists so we don't have to traverse more than once through the same node
  if (node in distances) return distances[node];
  //defining our length tracking variable
  let maxLength = 0;

  //iterating through neighbors of targeted node
  for (let neighbor of graph[node]) {
    //recursive call
    const attempt = traverseDistance(graph, neighbor, distances);
    //Check to see if our attempt resulted in a longer distance
    if (attempt > maxLength) maxLength = attempt;
  }

  //adding 1 to the distance to account for the final edge and returning distance for specified node
  distances[node] = maxLength + 1;
  return distances[node];
};
