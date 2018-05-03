/**
 * Tree is a non-sequential data structure which is useful for storing
 * information that needs to be found easily.
 *
 * We will cover:
 * 	-Tree terminology
 * 	-Create tree data structure
 * 	-Traversing a tree
 * 	-Adding or removing nodes
 * 	-AVL tree
 *
 * Tree is an abstract model of a hierarchical structure. The most common
 * example of a tree in real life is a family tree or a company or
 * organizational chart.
 *
 * TREE TERMINOLOGY
 *
 * A tree consist of node with a parent-child relationship. Each node has a
 * parent(except for the root node at the top) and zero or more children.
 * Each element in the tree is a node. There are INTERNAL NODES and EXTERNAL NODES.
 * An Internal node is a node with atleast one or more children.
 * A node which has no children is called an External node.
 *
 * A node can have ancestors and descendants. Ancestors of a node(except the root node)
 * are parents, grandparents, great-grandparents, and so on.
 *
 * The descendants of a node are children(child), grandchildren(grandchild),
 * great-grandchildren(great-grandchild), and so on.
 *
 * Depth of a node consists of the number of ancestors.
 *
 *
 * BINARY AND BINARY SEARCH TREES
 *
 * A node in a binary tree has two children at most: one left child and right child.
 * This definition allows us to write more efficient algorithms to insert, search,
 * and delete nodes to/from a binary tree. Binary trees are largely used in Computer
 * Science.
 *
 * A binary search tree is a binary tree, but it allow us to only store lesser values
 * on the left-hand side and nodes with greater values on the right-hand side.
 */

function BST() {
	let Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	// Helper for inserting new node
	let insertNode = function(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

	let root = null;

	// Method insert() adds a new key/node in the tree
	this.insert = function(key) {
		let newNode = new Node(key);

		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};
}

/**
 * TREE TEST CASE
 */

let tree = new BST();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
