              /* Graph algorithms */
              ======================
/**
 * Graph algorithm consist of vertices and edges.
 * Vertex is a point in a graph and edges is a path connecting the vertex
 * edges are defined as a pair(v1, v2) which are two vertices in a graph
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
 * Airline company can use graph to model its flight system. Each airport is a vertex, and each flight
 * one vertex to another is an edge. Weighted edge can be used to represent the cost of the flight from
 * one airport to another, or the distance from one airport to another, depending on what is being modeled.
 *
 * Computer Networks.
 *
 * Computer Netorks such as Local Area Network and much broader networks such as the Internet are modeled by
 * graghs.
 *
 * Anothe example of a real-world systems that can be modeled by graph is the consumer market, where vertices
 * represent both institutions(vendors) and consumers.
 *
 */
