/**
 * First let's consider the most common data structure item known as Arrays
 * Arrays play a major role in almost every application out there ever build
 * Arrays plays like ants, you won't miss them wherever you walk or work
 * JavaScript provide a flexible way of working with arrays to perform various
 * actions search as searching through data and sorting data
 * Also JavaScript provide programmers with array functions that allow programmer
 * to work with arrays using functional programming techniques.
 * 
 * We will look at all that in a bit
 */

 /**
  * CREATING AN ARRAY
  */

//One of the simplest way of creating an array of elements is ==>

var numbers = []; //We just initialized an empty array variable called numbers
console.log(numbers); // ==> displays []

//You can also create an array by decalring an array of elements inside the array variable

var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // ==> displays [1,2,3,4,5,6]

//You can also create an array by calling the Array constructor

var numbers = new Array();
console.log(numbers); // ==> displays []

//You can also create an array by declaring an array of elemenets inside the Array constructor

var numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers); // ==> displays [1,2,3,4,5,6]

//Also something of interest, JavaScript array does not need to be of same data type
//Array can consist of Number String Boolean

var objects = [null, 'Joe', 500, true];
console.log(objects); // ==> displays [ null, 'Joe', 500, true ]



 /**
  * VERIFY AN OBJECT IS AN ARRAY
  */

  //We can also verify if an object or variable is an array by calling Array.isArray()
  
var number = 3;
var numbers = [null, 'Joe', 500, true];
console.log(Array.isArray(number)); //==> displays false
console.log(Array.isArray(numbers)); //==> displays true


  /**
   * ACCESSING AND WRITING ARRAY ELEMENT
   */
//Data is assigned to array elements using the [] operator in an assignment statement 
//For example the following loop assigns value 1 to 50 to an array

var numbers = [];
for (var i = 0; i < 50; i++) {
  numbers[i] = i + 1;
}
console.log(numbers); //==> displays [1,2,3,4,5,6,7,........, 49, 50]

//array elements can also be accessed using the [] operator

var numbers = [1, 2, 3, 4];
console.log(numbers[0] + ' ' + numbers[1] + ' ' + numbers[2] + ' ' + numbers[3]); //==> display 1 2 3 4


    /**
    * ACCESS ARRAY ELEMENTS SEQUENTIALLY
    */

//Ofcourse accessing all array elements sequentially is easier than before

var number = [];
for (var i = 0; i < 20; i++) {
  numbers[i] = i + 1;
}

//Use for loop to loop through the array and print all the lements in the array

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); //==> prints each element on its own line
}

//You can also do a running sum in the array

var nums = [1, 3, 5, 7, 9, 4, 6, 90];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log(sum);


/**
* CREATING AN ARRAY FROM STRINGS
*/

/**
* Arrays can be created from string using the split() method
* that splits a string of words at a common delimeter such as
* space for each word and returns array consisting of
* individual parts of the string
*/

//The following program demos how split works on simple string word

var sentence = 'You got balls providing CS tutorials without a CS degree';
var words = sentence.split(' ');
for (var i = 0; i < words.length; i++) {
  console.log('Word ' + i + ': ' + words[i]); //==> displays
  /**
   *  Word 0: You
      Word 1: got
      Word 2: balls
      Word 3: providing
      Word 4: CS
      Word 5: tutorials
      Word 6: without
      Word 7: a
      Word 8: CS
      Word 9: degree
   */
}

/**
 * AGGREGATE ARRAY OPERATION
 */
/**
 * There are several operations you can perform on arrays.
 * We gonna take a look at shallow copy and deep copy
 */
/**
 * When you make a change on the original array, the change will
 * be reflected on the copy array
 */

 /**
  * SHALLOW COPY  
  */

 //Create array names array1
 
var array1 = [];
for (var i = 0; i < 10; i++) {
  array1[i] = i + 1;
}

//Copy array1 array elements to array2

var array2 = array1;
console.log(array2); //==> displays [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//Make change to the original array

array1[0] = 50;

//Display array2. You'll notice 50 is on first index of the array as we
//predicted

console.log(array2);

/**
 * DEEP COPY
 */

 /**
  * A better alternative is to make a deep copy so that each element
  * of the original array is actually copied to the new array's element
  * An effective way is to use  a function for this task
  */

//Define function to perform deep copy

function deepCopy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

//Create an array
var arr1 = [];
for (var i = 0; i < 15; i++) {
  arr1[i] = i + 1;
}

var arr2 = [];
deepCopy(arr1, arr2);
console.log(arr2); //==> displays [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

/**
 * SEARCH FOR VALUE IN AN ARRAY
 */

function searchArray(arr, itemToSearch) {
  var position = arr.indexOf(itemToSearch);
  if (position > 0) {
    console.log('Found ' + itemToSearch + ' at position ' + position);
  } else {
    console.log(itemToSearch + ' not found in the array');
  }
}

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

//Search test

searchArray(names, 'Cynthia');

/**
 * Other Array methods include
 * filter() ==> return an array if they meet certian condition provided
 * some() ==> return true if some array elements meet certain condition provided
 * every() ==> return true if all the array elements meet the specified condition
 * lastIndexOf() ==> return the last index of the element passed in as parameter
 * forEach() ==> maps through each array element
 * map() ==> maps through the array and return a new array based on the specified call back function
 * 
 */


 