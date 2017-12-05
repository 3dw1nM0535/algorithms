/**
 * Quicksort agorithm is one of the fastest sorting algorithm
 * for large data sets.
 * Quicksort is a divide-and-conquer algorithm that recursively
 * breaks a list of data into successively smaller sublists consisting
 * of smaller elements and larger elements.
 * The algorithm continues this process untill all the data is sorted.
 * 
 * The algorithm divides the list into sublist by selecting one element
 * of the list as a pivot.
 * Data is sorted around the pivot by moving elements that are less then
 * the pivot to the bottom of the list and elements that are larger than
 * the pivot to the top of the list.
 * 
 */

//quickSort() method algorithm definition
function quickSort (list) {
  if (list.length == 0) {
    return [];
  }

  var lesser = [];
  var greater = [];
  var pivot = list[0];

  for (var k = 1; k < list.length; k++) {
    if (list[k] < pivot) {
      lesser.push(list[k]);
    } else {
      greater.push(list[k]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

//Test data for quicksort algorithm
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor((Math.random()*100)+1);
}
console.log(nums);
console.log();
console.log(quickSort(nums));



