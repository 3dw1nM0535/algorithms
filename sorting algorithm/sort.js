//This module focuses on different sorting algorithms.
//Advanced algorithms are also in interest and timing various
//sorting algorithms to see which run more efficient and
//saves time(Big O Notation)
//We will work with array based data store.

//First is the class definition
function Carray (numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.toString = toString;
  this.insert = insert;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSort = shellSort;
  this.gaps = [5,3,1];

  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }

}

//setGaps() function definition to set gaps for shell sort algorithm
function setGaps(arr) {
  this.gaps = arr;
}

//setData() function definition to set data in the array
function setData() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

//clear() function definition to clear data in the array
function clear() {
  for (var i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}

//insertData() function definition
function insert (element) {
  this.dataStore[this.pos++] = element;
}

//toString() function definition to return elements in the array
function toString () {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + ' ';
    if (i > 0 && i % 10 == 0) {
      retStr += '\n';
    }
  }

  return retStr;
}

//swap() function definition to swap item in the array
function swap (arr, index1, index2) {
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//class test data
var numElements = 10;
var nums = new Carray(numElements);
nums.setData();
console.log('Raw data before sort');
console.log(nums.toString());


//Bubble sort algorithm is one of the slowest but
//one of the easiest algorithms to implement
//Data is sorted in ascending order
//large values are swapped to the right while
//lesser values swapped to the left until
//all the data is sorted in the array
function bubbleSort() {
  var numElements = this.dataStore.length;
  for (var outer = numElements; outer >= 2; outer--) {
    for (var inner = 0; inner <= outer - 1; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
    //console.log(this.toString());
  }

}

/*
//timing algorithm efficiency
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('Elapsed time for bubble sort algorithm on ' +
 numElements + ' is ' + elapsed + ' milliseconds!');
 console.log(' ');
console.log('Bubble sort output');
console.log(nums.toString());
*/

//Selection sort algorithm
//Selection sort algorithm start at the beginning of
//the array and compare the first element
//with the remaining elements in the array
//After examining all the elements the smallest element is place at the first position
//of the array
//This continues until all the algorthim arrives at the next to last position
//of the array at which all the elements are sorted

//Nested loops are used in selection sort algorithm. The outer loop move from
//first element to the next element to last element while the inner loop
//moves from the second elementof the array looking for values that are
//smaller than the element currently pointed out by the outer loop
//After each iteration the smallest value is assigned its proper place in the array

//selectionSort() function definition
function selectionSort() {
  //variable to hold minValue and temp
  var minValue, temp;
  //outer loop of the array
  for (var outer = 0; outer <= this.dataStore.length - 2; outer++) {
    minValue = outer;
    //inner loop of the array
    for (var inner = outer + 1; inner <= this.dataStore.length - 1; inner++) {
      //compare inner loop array value to outer loop array value
      if (this.dataStore[inner] < this.dataStore[minValue]) {
        //assing minValue = inner if true
        minValue = inner;
      }
    }
    //swap the elements in the array
    swap(this.dataStore, outer, minValue);
    //console.log(this.toString());
  }
}
/*
//timing selection sort algorithm
var start = new Date().getTime();
nums.selectionSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('Elapsed time for selection sort algorithm on ' + 
numElements + ' is ' + elapsed + ' milliseconds!');
console.log(' ');
console.log('Selection sort output');
console.log(nums.toString());
*/
//Insertion Sort

//Insertion sort is analogous to way human sort numerical or alphabetical character
//Outer loop moves element by element while inner loop compares
//element choosen by outer loop to the element next to it in the array
//If element choosen by outer loop is less than element selected in the inner loop,
//array elements are shifted over to the right to make room for the inner loop element

function insertionSort() {
  var inner, temp;
  //outer loop
  for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    //inner loop
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      inner--;
    }
    this.dataStore[inner] = temp; 
  }
}
/*
//test data for insertionSort()
//timing insertion sort algorithm
var startTime = new Date().getTime();
nums.insertionSort();
var stopTime = new Date().getTime();
var elapsedTime = stopTime - startTime;
console.log('Elapsed time for insertion sort algorithm on ' + 
numElements + ' is ' + elapsedTime + ' milliseconds!');
console.log(' ');
console.log('Insertion sort output');
console.log(nums.toString());
*/
/**
 * NB ==> Insertion sort algorihtm performs
 *    ==>faster the bubble sort selection sort algorithms
 * 
 * NB ==> selection sort algorithm perform faster than bubble sort algorithms
 * 
 * NB ==> bubble sort algorithm is the most inefficient sorting algorithm
 */


 //Next up ==> Advanced sorting algorithms
 /**
  * Advanced sorting algorithms include
    Named after its inventor Donald Shell

    ==> Shellsort algorithm
    ==> Heapsort algorithm
    ==> Mergesort algorithm
    ==> Quicksort algorithm

  These algorithms are generally considered the most efficient where large
  dataset involve millions instead of hundreds and thousands

  Key concept behind Shell sort algorithm is that it compares
  distant elements first rather than adjacent elements as in 
  the case in insertion sort algorithm

  Elements that are far out of place can be put into place more efficiently
  using this scheme rather than comparing adjacent elements

  It works by defining the gap sequence that indicates how far apart the compared elements
  are when starting the sorting process.

  The gap sequence can be defined dynamically, but for most application you 
  can predefined the sequence the algorithm will use

  Different sequence produce different results.

  */

  //shellSort() definition


  /**
   * ==> Dynamic gap value sequence computing
   */

   //The code below will compute dynamic sequence value to use in the
   //shellSort()

   //The value will be injected dynamically before coming out of the loop
/*
   var L = this.dataStore.length;
   var h = 1;
   while (h < L/3) {
     h = 3 * h + 1;
   }
*/


  //shellSort() definition with dynamic gaps sequence value
  function  shellSort() {
    var L = this.dataStore.length;
    var h = 1;
    while (h < L/3) {
      h = 3 * h + 1;
    }
    while (h >= 1) {
      for (var i = h; i < L; i++) {
        for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
          swap(this.dataStore, j, j-h);
        }
      }
      
      h = (h-1)/3;
    }
  } 

  //Shellsort test run on small dataset
  console.log('\nBefore shellsort \n');
  console.log(nums.toString());
  //console.log('\n During shellsort \n');
  nums.shellSort();
  console.log('\nAfter shellsort \n');
  console.log(nums.toString());