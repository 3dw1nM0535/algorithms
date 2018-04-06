/**
 * Linked list is a collection of objects called nodes. Each link is linked to a successor
 * node in the linked list using an object reference. The reference to another link is called a link.
 * Linked list are referenced by their relationship to the other element in the linked list unlike
 * array by their position in the array.
 * Moving through a linked list involve following the links of the list from the beginning node to the
 * end node(not including the header node which is sometimes used as a hook or entry into a linked list).
 * We mark the end of a linked list by pointing to a null node.
 * Linked-list include s special node called the head, to denote the beginning of linked-list.
 *
 * INSERTION OPERATION
 * Inserting new node to a linked list is more efficient. Link of the node before the inserted node(
 * the previous node) is changed to point to the new node and the node node's link is set to the node the
 * previous node was pointing to before insertion.
 *
 * REMOVING A NODE FROM LINKED LIST
 * Removing a node from a linked list is also easy to do. Link of the node before the removed node is directed
 * to point to the node the removed node was poiniting to, while also pointing the removed node to null,
 * effectively taking the node out of the linked list.
 *
 * OBJECT BASED LINKED LIST DESIGN
 * Node class for creating nodes and LinkedListClass for our linked list housekeeping functions.
 */

function Node(element) {
	this.element = element; // stores node data
	this.next = null; // stores link to the next node
}

// Only property stored in a linked list is the head denoting genesis of a linked list
function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	// this.remove = remove;
	this.display = display;
}

// Insertion function
// You have to specify which node you have to insert the new node before or after, we have to find the "after"
// node
function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
}

// Insert function definition
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

// display() method definition
function display() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

// remove() method definition
function remove(item) {
	var prevNode = this.findPrevious(item);
	if (!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next;
	}
}

//////////////////
// TEST PROGRAM //
//////////////////
