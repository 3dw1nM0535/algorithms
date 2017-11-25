/**
 * QUEUES DATA STRUCTURE
 */

/**
 * Queues are data structure that items are inserted
 * at the end and removed from the front
 * Queues are used to process data in the order in
 * which they occur
 * Queues work with the concept of First-In-First-Out
 */

 /**
  * Queues are used to order processes in OS
  * simulation enviroment such as bank or grocery
  * or printer spooler
  */

  /**
   * Two main operations invovled with queues are
   * enqueue which add elemene at the end of the 
   * queue and dequeue which removes element from
   * the front of the queue
   */

   /**
    * Peek() operation is used to view the element at
    * the front of the queue
    * length() operation return the length of the queue
    * clear() simply clears the queue
    */

//Class implementation of Queue ds

function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

//enqueue() adds an element to the end of the Queue
function enqueue(params) {
  this.dataStore.push(params);
}

//dequeue() removes an element from the front of the Queue
function dequeue() {
  return this.dataStore.shift();
}

//front() peeks at the front element of the Queue
function front() {
  return this.dataStore[0];
}

//back() peeks at the last element of the Queue
function back() {
  return this.dataStore[this.dataStore.length - 1];
}

//toString() displays all the element in the Queue
function toString () {
  var retString= '';
  for (var i = 0; i < this.dataStore.length; i++) {
    retString += this.dataStore[i] + '\n';
  }

  return retString;
}

//empty() tells us if the Queue is empty
function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

//Test data for Queue class
var q = new Queue();
q.enqueue('Mary');
q.enqueue('John');
q.enqueue('Smith');
q.enqueue('Wills');
q.enqueue('Brian');
q.enqueue('Stella');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('Queue at the front ' + q.front());
console.log('Queue at the back ' + q.back());









