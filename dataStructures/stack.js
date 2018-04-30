/**
 * Stack is an ordered collection of items that follows LIFO(Last-In-First-Out) principle.
 * The additions of new items or removal of existing items takes place at the same end.
 * The end of the stack is known to be the top while the opposite is the base.
 * New elements are near the top while old elements are near the base.
 */

function Stack() {
	var items = [];

	// Method for adding new elements to the top of the stack
	this.push = function(item) {
		items.push(item);
	};

	// Method for removing an item from the stack(last item added is the first item to be removed)
	this.pop = function() {
		return items.pop();
	};

	// Method for returning the top element in the stack
	this.peek = function() {
		return items[items.length - 1];
	};

	// Method for showing if the stack is empty
	this.isEmpty = function() {
		return items.length === 0;
	};

	// Method for returning the size of our stack
	this.size = function() {
		return items.length;
	};

	// Method to clear our stack/Another method would be the pop() until out stack is empty()
	this.clear = function() {
		items = [];
	};

	// Method for printing elements of the stack to inspect elements
	this.print = function() {
		console.log(items.toString());
	};
}

/**
 * USING THE STACK CLASS
 */

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(100);
stack.push(400);
stack.push(30);
console.log(stack.isEmpty());
stack.print();
console.log(stack.peek());
console.log("Stack size: " + stack.size());
stack.pop();
stack.pop();
console.log("Stack size: " + stack.size());
stack.print();
console.log(stack.peek());

/**
 * STACK CLASS REAL-WORLD APPLICATION
 */

// Decimal to base 2 conversion.
function toBase2(number) {
	var stack = new Stack();
	var remainder;
	var binaryString = "";

	while (number > 0) {
		remainder = Math.floor(number % 2);
		stack.push(remainder);
		number = Math.floor(number / 2);
	};

	while (!stack.isEmpty()) {
		binaryString += stack.pop().toString();
	};

	return binaryString;
}

// TEST CASE
console.log("BASE 2 CONVERSION TEST CASE");
console.log(toBase2(233));
console.log(toBase2(10));
console.log(toBase2(1000));

// Base converter algorithm
function baseConverter(number, base) {
	var stack = new Stack();
	var remainder;
	var digits = "0123456789ABCDEF";
	var binaryString = "";

	while (number > 0) {
		remainder = Math.floor(number % base);
		stack.push(remainder);
		number = Math.floor(number / base);
	};

	while (!stack.isEmpty()) {
		binaryString += digits[stack.pop()];
	};

	return binaryString;
}

// TEST CASE
console.log("BASE CONVERTER ALGORITHM TEST CASE");
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));

