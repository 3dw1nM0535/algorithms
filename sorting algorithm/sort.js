/**
 * First of all, Bubble sort algorithm is the first to check out
 * and get familiar to it
 * First we will define the array to use in this sorting algorithm
 * and upcoming ones which we will discuss later after bubble sort
 * algorithm.
 */


/**
 * Base class to use in the implementation of the various sorting algorithm
 * is Sorting class
 */

/**
 * Construct Sorting class to use in the definition of various 
 * basic and advanced sorting algorithms function
 */

//Array test bed class definition

function Sorting (numElements) {
  this.dataStore = [];
  this.bubbleSort = bubbleSort;
  this.setData = setData;
  this.insert = insert;
  this.swap = swap;
  this.toString = toString;
  this.numElements = numElements;
  this.pos = 0;
  this.clear = clear;

  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = i;
  }
}

//setData () method sets data in dataStore
function setData () {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

//clear() method clears the dataStore
function clear () {
  for (var i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}

//insert() inserts data to the dataStore
function insert (params) {
  this.dataStore[this.pos++] = params;
}

//toString() prints all the elements of the dataStore
function toString () {
  var retString = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    retString += this.dataStore[i] + ' ';
    if (i > 0 && i % 10 == 0) {
      retString += '\n';
    }
  }

  return retString;
}

//swap() method swaps elements in the array
function swap (arr, index1, index2) {
  var tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}
//Test if the class works as expected
/*
var numElements = 100;
var myArray = new Sorting(numElements);
myArray.setData();
console.log(myArray.toString());
*/

//Basic sorting bubbleSort() algorithm definition
function bubbleSort () {
  var numElements = this.dataStore.length;
  for (var i = numElements; i >= 2; i--) {
    for (var j = 0; j <= i-1 ; j++) {
      if (this.dataStore[j] > this.dataStore[j+1]) {
        swap(this.dataStore, j, j+1);
      }
    }
    console.log(this.toString()); //To visualize sorting process of the algorithm
  }
}

//Test program for bubbleSort() with array of 1-10
/*
numElements = 10;
myArray = new Sorting(numElements);
myArray.setData();
console.log(myArray.toString());
myArray.bubbleSort();
console.log(myArray.toString());
*/

