//Search algorithm implementation
//First for scrutiny is Sequential search algorithm implementation 
function seqSearch(arr, data) { //sequential algorithm made better
  //Loop through the array to see each element
  for (var i = 0; i < arr.length; i++) {
    //Compare item with data to search for in the array and be in parity of 80% - 20%
    if (arr[i] === data && i > (arr.length * 0.2)) {
      //Implement sequential search algorithm with self-organizing data technique
      swap(arr, i, 0);
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }

  //Exit if data to search for is not found in the array
  return false;
}

//swap() function to call in self-organizing technique
function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}

//dispArray() function definition to display every element in the array on new line
function dispArray(arr) {
  //loop through the array to see each item or access each item
  for (var i = 0; i < arr.length; i++) {
    //print the item preceding it with space
    console.log(arr[i] + "");
    //print new line if element when divided by 10 returns remainder of 9
    if (i % 10 == 9) {
      console.log('\n');
    }
  }

  //print new line if element when diveded by 10 returns remainder not equal to 0
  if (i % 10 != 0) {
    console.log('\n');
  }
}

//Populate array sample data with random number
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.random() * 11);
}

dispArray(nums);
var num = 14;
//check if data is found and print the data
if (seqSearch(nums, num)) {
  console.log(num + " is in the array of data at position " + position);
} else {
  console.log(num + " is not in the array.");
}

//findMin() function finds minimum value in the array
function findMin(arr) {
  //Algorithm to find min value in the array
  var min = arr[0]; //assign first element to use as comparison alogn the loop
  //start looping at the second element
  for (var i = 1; i < arr.length; i++) {
    //compare current element with min variable
    if (arr[i] < min) {
      //assign current element to min value if current element is lesser the min variable
      min = arr[i];
    }
  }

  //return min variable which contains the minimum value from the array
  return min;
}

//test findMin() function
var minValue = findMin(nums);

//print the current minValue found in the array of data
console.log("The minimum value is " + minValue);

//findMax() function finds the maximum value in the array of data
function findMax(arr) {
  //Algorithm to find max value in the array arr
  var max = arr[0];
  //loop through the array to see or access each item of array
  for (var i = 1; i < arr.length; i++) {
    //compare each array item arr[i] with max value
    if (arr[i] > max) {
      //assign current array to max variable if array item is greater than max variable
      max = arr[i];
    }
  }

  //return the maximum value in variable max
  return max;
}

//test data for findMax()
var maxValue = findMax(nums);

//print maximum value if found in the array
console.log("The maximum value in the array is " + maxValue);

//test data for self-organizing data technique for search algorithm
console.log('Testing better sequential algorithm using 80% - 20% parity');
dispArray(nums);
var val = 9;
if (seqSearch(nums, val)) {
  console.log('Element found!');
  dispArray(nums);
} else {
  console.log(val + " is not in the array");
}