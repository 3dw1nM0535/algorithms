//Stack data structures
/**
 * Stack data structure work on the concept of Last-In-First-Out
 * Stack is alist of elements which are accessible only from the
 * end of the list
 * Elements are added onto the stack using push() method
 * Elements are removed off the stack using the pop() method
 * peek() method peep for element at the top of the stack without
 * removing it from the stack 
 * clear() removes all element from the stack
 * length property holds the number of element in the stack
 * empty property lets us know if a stack has no elements in it
 */

/**
 * STACK IMPLEMENTATION
 */

//We will use an array to store our data in stack
//Define stack() class

function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

/**
 * To implement push() method, we need to store the new element
 * at the top variable(that is index 0) and increment the top variable
 * to point to the next empty position in the array
 */

function push(params) {
  this.dataStore[this.top++] = params;
}

/**
 * peek() method return the element at the top of the stack by accessing
 * the element at the (top-1) position of the array
 */

function peek(params) {
  return this.dataStore[this.top - 1];
}

/**
 * length() method returns the number of element in the stack
 * by accessing the top property
 */
function length(params) {
  return this.top;
}

/**
 * clear() method simply clears the stack
 */

function clear(params) {
  this.top = 0;
}

/**
 * pop() method returns the element  on top of the stack and
 * then decrements the top variable
 */
function pop(params) {
  return this.dataStore[--this.top];
}


//Testing stack class implementation

var s = new Stack();
s.push('David');
s.push('Mike');
s.push('Dummy');
s.push('Brian');
s.push('Joe');

console.log('Length of stack: ' + s.length());
console.log('Peek element: ' + s.peek());
console.log('Popped element ' + s.pop());
console.log('Peek element after pop ' + s.pop());
s.push('Cynthia');
console.log('Peek element after push ' + s.pop());
s.clear();
console.log('Stack length after clear ' + s.length());
console.log('Length ' + s.length());
console.log('Peek ' + s.peek());
s.push('Clayton');
console.log('Peek after push ' + s.peek());


/**
 * STACKS ARE USED TO CONVERT ANY NUMBER FRO BASE 2 THRO' 9
 */

function mulBase(num, base) {
  var s = new Stack();

  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = '';
  while(s.length() > 0) {
    converted += s.pop();
  }

  return converted;
}

//Base convertion program test data
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num +' converted to base ' + base + ' is ' + newNum);
var num = 125;
var base = 8;
var newNum = mulBase(num, base);
console.log(num + ' converted to base ' + base + ' is ' + newNum);


