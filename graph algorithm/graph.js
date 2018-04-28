/**
 * Graph is an abstract model of a network structure. A graph is aset of nodes(or vertices)
 * connected by edges.
 * Any binary relationship can be reresented by a graph.
 *
 * Any social network eg Facebook, Google, Twitter can be represented by a graph.
 *
 * We can also use graph to represent roads, flights, and communication.
 *
 * A Graph = (V, E)
 *   V = a set of vertices
 *   E = a set of edges connecting the vertices in V
 *
 * Vertices connected by an edges are called ADJACENT VERTICES.
 * A degree of a vertex consist of the number of adjacent vertices
 * A path is sequence of adjacent vertices(v1, v2, v3, v4,......vn+1).
 * A simple path does not contain repeated vertices.
 * A cycle is a simple path, except for the last vertex, which is the same as the first vertex.
 *
 * A graph is a cyclic is it does not have cycles. A graph is connected if there is a path
 * between every pair  of vertices.
 */