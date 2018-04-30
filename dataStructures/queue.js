/**
 * Queue is an ordered collection of items that follows the FIFO(First-In-First-Out) principle.
 * Also known as First-In-First-Served principle.
 * The addition of new element in the queue is at the tail and the removal is at the front.
 * The newest element added to the queue must wait at the end of the queue.
 * The first element at the queue is the first element to be attended to.
 */

function Queue() {
	var items = [];

	// Method enqueue() adds an element at the end of the queue
	this.enqueue = function(element) {
		items.push(element);
	};

	// Method dequeue() removes element from the front of the queue and returns it
	this.dequeue = function() {
		return items.shift();
	};

	// Method peek() return element at the front from the queue(does not edit queue, only returns element)
	this.peek = function() {
		return items[0];
	};

	// Method isEmpty() returns true if queue is empty, otherwise false
	this.isEmpty = function() {
		return items.length === 0;
	};

	// Method size() returns size of the queue
	this.size = function() {
		return items.length;
	};

	// Method print() for printing elements at the queue
	this.print = function() {
		console.log(items.toString());
	};
}

/**
 * USING THE QUEUE CLASS
 */

var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("Jane Doe");
queue.enqueue("John Doe");
queue.enqueue("Mary Jane");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

/**
 * PRIORITY QUEUE ALGORITHM IMPLEMENTATION
 */

function PriorityQueue() {
	var items = [];

	// Method queue element
	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		let queueElement = new QueueElement(element, priority);

		let added = false;
		for (var i = 0; i < items.length; i++) {
			if (queueElement.priority < items[i].priority) {
				items.splice(i, 0, queueElement);
				added = true;
				break;
			}
		}
		if (!added) {
			items.push(queueElement);
		}
	};

	this.print = function () {
		for (var i  = 0; i < items.length; i++) {
			console.log(`${items[i].element} - ${items[i].priority}`);
		}
	};

}

/**
 * PRIORITY QUEUE TEST CASE
 */
console.log("PRIORITY QUEUE TEST CASE");
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 2);
priorityQueue.enqueue("Justin", 1);
priorityQueue.print();
