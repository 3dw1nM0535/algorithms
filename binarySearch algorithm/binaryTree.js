/**
 * Binary Tree and Binary Search Tree
 */

/**
 * Binary Tree are used to store data in hierarchical manner. Its a non-linear data structure.
 * Tree data structure are used to store hierarchical data such as files in a file system and
 * for storing sorted list of data.
 */

/**
 * Binary tree are chosen over other more types of data structures because you an search a Binary Tree
 * very quickly(as opposed to linked list, for example), and you can quickly insert and delete data
 * from a binary tree (as opposed to an array).
 */

/**
 * TREE DEFINED
 */


/**
 * Tree is made up of a set of nodes connected by edges. An example of a tree is a company's organizational chart.
 * The purpose of organizational chart is communicate the structure of an organization. Each box is a node, and
 * lines connecting the boxes are the edges. The nodes rep the position that make up an organization, and edges
 * rep the relationship between those position.

 * The top node of a tree is known as the root node. If a node is connected to other nodes below it, the preceding
 * node is called the parent node, and the nodes following it are called child nodes.
 * A node can have zero, one or more child nodes connected to it. A node without any child node is called
 * a leaf node.

 * The series of edges you follow to get from one node to another is called a Path. Visiting all the nodes in
 * a tree in a particular order is known as Tree Traversal.
 */

/**
 * Binary tree is one where each node can have no more than two children. By lomiting the number of children
 * to two, we can write efficient programs for inserting data, searching for data and deleting data in a tree.

 * Child nodes of a parent node are referred to as left node and the right node. Certain value can be stored only
 * in the left and other data values only in the right node on certain binary tree implementation.
 */

 /**
  * A Binary search tree is one where data with lesser values are stored in left nodes and data with greater
  * values are stored in right nodes. This property provides for very efficient searches and holds for numeric
  * data and non-numeric data, such as string and words.
  */

// Binary search tree is made up of nodes, so the first object to create is a Node Object.
// Node Object stores both the data and links (left and right) to other nodes.

function Node (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;

  // Displays data stored in a Node
  function show () {
    return this.data;
  }

}

// BST class definition
function BST () {
  this.root = null;
  this.inOrder = inOrder;
  this.insert = insert;
  this.getMin = getMin;
  this.getMax = getMax;
}

// insert() method of BST to add new nodes to the tree
function insert (data) {
  var n = new Node(data, null, null);

  // check if root node exist
  if (this.root == null) {
    // BST is the new node if root node doesn't exist
    this.root = n;
  } else {
    // set root node to be the current node
    var current = this.root;
    var parent; // parent node
    while(true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

/**
 * Traversing a Binary Tree
 */

// inOrder () Traversal method(visits all the nodes of a BST in ascending order of the node key values).
function inOrder (node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
}

/**
 * TEST PROGRAM
 */
var nums = new BST();
nums.insert(23);
nums.insert(35);
nums.insert(78);
nums.insert(90);
nums.insert(09);
nums.insert(4);
nums.insert(6);
nums.insert(100);
console.log('Inorder traversal: ');
inOrder(nums.root);

/**
 * BST Searches.

 * Search for a specific value
 * Search for the minimum value
 * Search for the maximum value
 */

/**
 * Search for minimum and maximum value.

 * Searching for the minimum value in a BST is relatively simple since lower values are stored
 * in the left child node so you only traverse the left edges of the BST until you get to the last node.
 */

// getMin() find the minimum value in a BST
function getMin () {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }

  return current.data;
}

/**
 * getMin() traverses the BST left link of each node until it reaches the left end of the BST
 * which is defined as
 * current.left = null

 * When this point is reached, the data stored in the current node must be the minimum value.
 */

/**
 * Searching for the maximum value stores in th BST, the function simply traverses the right links
 * of nodes until the function reaches the end of the BST. The value stored in the node must be the
 * maximum value.
 */

// getMax()
function getMax () {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }

  return current.data;
}

/**
 * TEST PROGRAM
 */

var min = nums.getMin();
console.log('The minimum value of the BST is: ' + min);
// console.log('\n');
var max = nums.getMax();
console.log('The maximum value of the BST is: ' + max);
