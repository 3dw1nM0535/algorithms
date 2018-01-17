/**
 * Shellsort is one of the advanced sorting algorithm
 * in JavaScript.
 * Shellsort was named after its inventor Donald Shell.
 * Shellsort is based on insertion sort algorithm but is a big
 * improvement over that basic sorting algorithm.
 * Shellsort key concept is that it compares distant element
 * first, rather than adjacent elements, as is done on insertion
 * sort algorithm.
 * 
 * As the algorithm loops through the elements, the distance between
 * each element decreases until, when at the end of the dataset the
 * algorithm is comparing adjacent elements.
 * 
 * Elements that are far out of place can be put into place more
 * efficiently using this schema than by simply comparing neighbouring
 * elements.
 * 
 * Shellsort algorithm works by defining a gap sequence that indicates
 * how far apart compared elements are when starting the sorting process.
 * This gap sequence can be defined dynamically, but for most applications,
 * you can predefine the gap sequence the algorithm will use.
 * 
 * The average case of shellsort algorithm, the gap sequence to use is:
 * 701, 301, 132, 57, 23, 10, 4, 1 defined by Marcin Ciura in his paper
 * on best increments for average case for Shellsort algorithm.
 */

//Let's start defining the function class for our Shellsort algorithm

function Sort (numElements) {
  this.dataStore = [];
  this.shellSort = shellSort;
  this.setData = setData;
  this.setGaps = setGaps;
  this.toString = toString;
  this.gaps = [5,3,1];
  this.numElements = numElements;

  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = i;
  }

}

//setGaps() method definition

function setGaps (arr) {
  this.gaps = arr;
}

//setData() method definition

function setData () {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
  }
}

//toString() method definition

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

//shellSort() method algorithm definition

function shellSort () {
  for (var g = 0; g < this.gaps.length; g++) {
    for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
      var tmp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > tmp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j-this.gaps[g]];
      }

      this.dataStore[j] = tmp;
    }
    console.log(this.toString());
  }
}

//Test program data test for Shellsort algorithm

var nums = new Sort(10);
nums.setData();
console.log('Before shellsort: \n');
console.log(nums.toString());
console.log('\nDuring shellsort: \n');
nums.shellSort();
console.log('\nAfter shellsort: \n');
console.log(nums.toString());




