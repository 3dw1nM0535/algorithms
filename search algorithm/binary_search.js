//Binary search algorithm implementation
//Set lower bound to be the first position of the array(0)
//Set the upper bound to be the last element of the array(array.length - 1)
//While the lower bound is less than or equal to the upper bound

  /*
    => Set the midpoint as(upper bound - lower bound / 2)
    => If the midpoint is less than the element being searched for, set new lower bound = midpoint + 1
    => If the midpoint element is greater than the element being searched for, set upper bound = midpoint - 1
    
  */

//Otherwise return the midpoint element as the found element

//binSearch() definition
function binSearch(arr, data) {

  //declare lowerBound and upperBound variable respectively
  var lowerBound = 0;
  var upperBound = arr.length - 1;

  //while lowerBound is less than upperBound
  while(lowerBound <= upperBound) {
    
    //Find midPoint of the array
    var midPoint = Math.floor((upperBound + lowerBound) / 2);
    //console.log('Current midpoint: ' + midPoint);

    //compare midPoint to the data being searched for in the array of element
    if (arr[midPoint] < data) {

      //set lowerBound = midPoint + 1 if midPoint element is less than data being searched for
      lowerBound = midPoint + 1;
    } else if (arr[midPoint] > data) {

      //set upperBound = midPoint - 1 if midPoint element iis greater than data being searched for
      upperBound = midPoint - 1;
    } else {

      //else return midPoint as the element
      return midPoint;
    }
  }

  return -1;
}

//display data in the array
function dispArr(arr) {
  var retStr = '';
  for (var i = 0; i < arr.length; i++) {
    retStr += arr[i] + ' ';
    if (i > 0 && i % 10 == 0) {
      retStr += '\n';
    }
  }

  return retStr;
}


//quickSort() before conducting search
function quickSort(arr) {

  if (arr.length == 0) {
    return [];
  }

  var lesser = [];
  var greater = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}


//test data for binary algorithm
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}

var numArr = quickSort(nums);
console.log(dispArr(numArr));
var val = 82;
var retValue = binSearch(numArr, val);

if (retValue >= 0) {
  console.log('Found!');
} else {
  console.log('Not found!');
}