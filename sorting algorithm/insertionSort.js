/**
 * With insertion sort let's use this simple analogy of how
 * human beings sort data:
 * I have asked each student in a classroom to turn his/her card
 * with his/her name, ID and a short biographical sketch. The students
 * return the cards in random order, so i have to sort them alphabetically
 * so i can compare them to my class roster easily
 * 
 * I take the cards to my office, clear the desk and pick the first card.
 * The last name on the card is Smith. I place it at the top left corner
 * of the desk and pick the second card. The last name on the card is Brown,
 * i move Smith over to the right and place Brown in Smith's place. The next
 * card is Williams. It can be inserted at the far right of the desk without
 * having to shift all other cards. The next card is Aucklin. It has to go at
 * the beginning of the list, so each of the other cards must be shifted to one
 * position to the right to make room for Aucklin's card.
 * 
 * This is how insertion sort works!!!
 * 
 * The insertion sort has two loops. The outer loop moves from element-element
 * through the array, while the inner loop compares the element pointed out to 
 * by the outer loop to the element next to it in the array.
 * If the element choosen in the outer loop is less than the element selected
 * by the inner loop, array elements are shifted over to the right to make
 * room for inner-loop element.
 */

//Sort class definition for insertion sort algorithm
function Sort (numElements) {
  this.dataStore = [];
  this.insertionSort = insertionSort;
  this.toString = toString;
  this.setData = setData;
  this.numElements = numElements;

  for (var i = 0; i <= this.numElements; i++) {
    this.dataStore[i] = i;
  }

}

//setData() method for initializing data for our dataStore
function setData () {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

//toString() method for printing elements in our dataStore
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

//insertionSort() method for implementing selection sort algorithm

function insertionSort () {
  var temp;
  var inner;
  for (var i = 1; i < this.dataStore.length-1; i++) {
    temp = this.dataStore[i];
    inner = i;
    while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner-1];
      inner--;
    }
    this.dataStore[inner] = temp;
  }
}

var numElements = 100;
var myArray = new Sort(numElements);
myArray.setData();
console.log(myArray.toString());
myArray.insertionSort();
console.log(myArray.toString());


