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


/*
const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs); // -> 3

const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 5

const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
semestersRequired(numCourses, prereqs); // -> 2

const numCourses = 12;
const prereqs = [];
semestersRequired(numCourses, prereqs); // -> 1

const numCourses = 3;
const prereqs = [
  [0, 2],
  [0, 1],
  [1, 2],
];
semestersRequired(numCourses, prereqs); // -> 3

const numCourses = 6;
const prereqs = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];
semestersRequired(numCourses, prereqs); // -> 2

*/
