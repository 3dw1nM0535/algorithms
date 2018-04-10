              /* Graph algorithms */
/**
 * Graph algorithm consist of vertices and edges.
 * Vertex is a point in a graph and edges is a path connecting the vertex.
 * Edges are defined as a pair(v1, v2) which are two vertices in a graph
 * Vertex can have a weight known as cost
 * Graph whose pair is ordered is known as directed or digraph graph
 * An example is a flowchart which shows computations
 * of a computer program
 * A graph which is not ordered is known as an unordered graph or just a graph
 *
 *
 * A path is a sequence of vertices in a graph such that all vertices in the path
 * are connected by edges. Length of a path is the number of edges from the first vertex
 * in the path to the last vertex. A path can also consist of a vertex to itself, which is
 * called a loop. Loop can have length of 0.
 *
 *
 * A cycle is a path with atleast one edge whose first and last vertices are the same. A simple
 * cycle is one with no repeated edges or vertices for both directed and undirected graph.
 * Path that repeat other vertices beside the first and the last vertices are called general cycles.
 *
 * Two vertices are considered strongly connected if there is a path from the first vertex to the
 * second vertex, and vice versa. If the graph is a directed graph, and all its vertices are strongly
 * connected, then the directed graph is considered strongly connected.
 *
 *
 * 							Real-world systems modelled by graph
 *
 * Traffic flow
 *
 * Vertices represent the street intersection, and the edges represent the streets. Weighted edges can
 * be used to represent speed limits or number of lanes. Modelers can use graphs to determine the best
 * route and the street mostly likely to suffer from traffic jam.
 *
 * Airline
 *
 * Airline company can use graph to model its flight system. Each airport is a vertex, and each flight from
 * one vertex to another is an edge. Weighted edge can be used to represent the cost of the flight from
 * one airport to another, or the distance from one airport to another, depending on what is being modeled.
 *
 * Computer Networks.
 *
 * Computer Netorks such as Local Area Network and much broader networks such as the Internet are modeled by
 * graghs.
 *
 * Another example of a real-world systems that can be modeled by graph is the consumer market, where vertices
 * represent both institutions(vendors) and consumers.

                    BUILDING A GRAPH CLASS

 * The first step to building a Graph class is to build a Vertex class to store vertices of a graph. Vertex
 * takes two parameters: one to identify the vertex and the other to store a Boolean value indicating whether
 * or not the vertex has been visited.
 */

 function Vertex (label) {
   this.label = label;
 }

 // We will store the vertices in an array and reference then later in the Graph class by their position in the
 // array.

 /**
  * The Real information about a graph is stored in the edges, since the edges describe the structures of a graph.
  * With edges, their can be many edges linked to a single vertex or just one edge.

  * The method we will use in representing edges of a graph is called adjacency list or array of adjacency lists.
  * With this method, the edges are stored as a vertex-indexed array of lists(arrays) of the vertices adjacent to
  * each other. Using this scheme, when we reference a vertex in a program, we can efficiently access the
  * list of all the vertices it is connected to.

  * Another method for representing the edges of a graph is called adjacency matrix. This is a two dimensional-array
  * in which the elements of the array indicate whether an edge exist between two vertices.
  */

  function Graph (v) {
    this.vertices = v;
    this.edges = 0; // Keeps track of how many edges are represented in the Graph
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) { // In each element of the array, loop adds subarray to store
      this.adj[i] = []; // all the adjacent vertices
      this.adj[i].push(''); // and initializes each element to the empty string
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
  }

  // addEdge() method definition.
  // When called with two vertices(A, B), finds adjacency list for vertex A and adds B to the list, then finds
  // adjacency list for vertex B and adds A to the list. Finally the function increments the number of edges by 1.

  function addEdge (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  // showGraph() method definition.
  // displays a Graph by showing a list of all vertices and the vertices that are adjacent to them.

  function showGraph () {
    for (var i = 0; i < this.vertices; i++) {
      console.log(i + ' => ');
      for (var j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] != undefined) {
          console.log(this.adj[i][j] + ' ');
        }
      }
      console.log();
    }
  }

  /**
   * TEST PROGRAM FOR GRAPH CLASS
   */

  var g = new Graph(5);
  g.addEdge(0,1); // shows that 0 has edges to vertices 1 and 2
  g.addEdge(0,2);
  g.addEdge(1,3); // shows that 1 has edges to vertex 0 and 3: 3 has an edge to vertex 1
  g.addEdge(2,4); // shows that 2 has edges to vertex 0 and 4: 4 has an edge to vertex 2
  g.showGraph();

/**
 * SEARCHING A GRAPH
 */
