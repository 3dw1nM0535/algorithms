/**
 * Linked lists are dynamic data structures which store sequential
 * sequential collections of elements, but unlike arrays, the linked
 * list are not placed contigously in memory.
 * Each element consists of a node which stores the element itself and
 * also a reference(known as a pointer or link) that points to the next
 * element.
 *
 * One benefit of linked list over conventional arrays is that we do not
 * have to shift elements over when adding or removing them.
 */

function Linkedlist() {
	let Node = function(element, next) {
		this.element = element;
		this.next = null;
	};

	let head = null;
	let length = 0;

	// Method append() for adding element to the linked list
	// append() : when list isEmpty(), we are adding its first element, when
	// the list is not empty, we are appending elements to it.
	this.append = function(element) {
		let node = new Node(element);
		let current;

		if (head === null) { // if the list is empty
			head = node;
		} else { // if the list is not empty
			current = head;
			while (current.next) { // loop the list until it finds last item
				current = current.next;
			}
			current.next = node; // assign next to node and make the link/connection
		}
		length++; // update size of list
	};

	// Method remove() for removing element from the linked list
	// Two scenarios for removing element from the linked list:
	// first one is removing the first element, and the second one
	// is removing any element but the first one.
	// method1 for removing an element from a specified position, and
	// the second one is base on the element value.
	this.removeAt = function(position) {
		if (position > -1 && position < length) { // check for out-of-bounds values
			let current = head;
			let previous;
			let index = 0;

			// removing first item
			if (position === 0) {
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				// link previous with current's next: skip it to remove
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	};

	// Method insert() for inserting element at specified position
	this.insert = function(position, element) {
		if (position > -1 && position < length) {
			let node = new Node(element);
			let previous;
			let current = head;
			let index = 0;

			if (position === 0) {
				node.next = current;
				head = node;
			} else {
				while (index++ < position) {
				previous = current;
				current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};

	// Method toString() for displaying linkedlist
	this.toString = function() {
		let current = head;
		let string = "";

		while (current) {
			string += current.element + (current.next ? "\n" : "");
			current = current.next;
		}
		return string;
	};

	// Method indexOf() to return index of an element
	this.indexOf = function(element) {
		let current = head;
		let index = -1;

		while (current) {
			if (element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};

	// Method remove() to remove element from the linkedlist
	// with the help of removeAt() and indexOf()
	this.remove = function(element) {
		let index = this.indexOf(element);
		return this.removeAt(index);
	};

	// Method isEmpty() for checking if linkedlist is empty
	this.isEmpty = function() {
		return length === 0;
	};

	// Method size() for returning size of our linkedlist
	this.size = function() {
		return length;
	};

	// Method getHead() for returning head of our linkedlist
	this.getHead = function() {
		return head;
	};
}

/**
 * LINKED LIST TEST CASE
 */

let linkedlist = new Linkedlist();
linkedlist.append("Edwin");
linkedlist.append("Mike");
linkedlist.append("Camila");
linkedlist.append("JJ");
console.log(linkedlist.toString());
console.log();
console.log("Removing...");
linkedlist.remove("Mike");
console.log(linkedlist.toString());
console.log("Removed!");
console.log();
console.log("Adding...");
linkedlist.append("John Doe");
console.log(linkedlist.toString());
console.log("Added!");
console.log();
console.log("Inserting...");
linkedlist.insert(2, "Yonah Blake");
console.log(linkedlist.toString());
console.log("Inserted!");

