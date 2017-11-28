/**
 * Selection sort algorithm starts sorting at the beginning of
 * the array and comparing the first element with the remaining elements.
 * After examining all the elements, the smallest element is placed at the
 * first position of the array, and the algorithm moves to the second
 * position.
 * This process continues until the algorithm arrives at the next to
 * last position of the array, at which point all the data is sorted.
 * 
 * 
 * Nested loops are used in this algorithm, the outer loop moves from
 * first element to next to last element; inner loop moves from the second
 * array element of the array to the last element, looking for values that
 * are smaller than the current element being pointed to by the outer loop.
 * 
 * After each iteration of the inner loop, the smallest value in the array is
 * assigned its proper place in the array.
 */

//Sort class definition for selection sort
function Sort (numElements) {
  this.dataStore = [];
  this.numElements = numElements;
  this.setData = setData;
  this.selectionSort = selectionSort;
  this.toString = toString;
  this.swap = swap;

  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = i;
  }

}

//setData() method definition for initializing data for our dataStore
function setData () {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

//toString() method for printing the elements of our dataStore
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

//swap() method definition for swapping elements in the array
function swap (arr, index1, index2) {
  var tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

//selectionSort() method definition for implementing selection sort algorithm
function selectionSort () {
  var min;
  for (var i = 0; i <= this.dataStore.length-2; i++) {
    min = i;
    for (var j = i+1; j <= this.dataStore.length-1; j++) {
      if (this.dataStore[j] < this.dataStore[min]) {
        min = j;
      }
      swap(this.dataStore, i, min);
      //console.log(this.toString());
    }
  }
}

//Test program for selection sort algorithm
var numElements = 100;
var myArray = new Sort(numElements);
myArray.setData();
console.log(myArray.toString());
console.log();
myArray.selectionSort();
console.log(myArray.toString());


