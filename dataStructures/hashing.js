/**
 * Hashing is a common technique for storing data in such a way that the data
 * can be inserted and retrieved very quickly. Hashing uses a data structure
 * known as Hash table. They provide fast insertion, deletion and retrieval.
 * Though they perform poorly in operations that involve searching, such as
 * finding the minimum and the maximum value. For this operations, other data structures
 * such as binary tree are more appropriate.
 *
 * OVERVIEW OF HASHING
 * Hash table is designed around an array where each element in the array is based on an
 * associated data element called the KEY.
 * To store a piece of data in the hash table, KEY is mapped into a number in the range of 0
 * through the hash table size using a HASH FUNCTION.
 * Ideally hash function stores each key in its own array element. Due to the limited number
 * of array elements(theoritical in JavaScript) and the unlimited number of possible keys, more
 * realistic goal of a hash function is to eveny distribute the keys among elements in the array.
 * Even with an efficient hash function, it is possible for two keys to hash(result of the hash
 * function) to the same value. This is called COLLISION.
 * When creating a hash function, you determine how large an array to create for the hash table.
 * The array size number should be a prime number. If keys are random integers, then the hash
 * function should more evenly distribute the keys. This type of hashin is called MODULAR HASHING.
 * Choosing a hash function to work with strings proves to be more difficult and should be choosen
 * carefully.
 * The simplest hash function is to sum the ASCII value of letters in the key. The hash value is
 * then that sum modulo the array size. 
 */

// simpleHash function definition
function simpleHash(data) {
	var total = 0;
	var i = 0;
	var L = data.length;
	for(i; i < L; i++) {
		total += data.charCodeAt(i);
	}

	return total % this.table.length;
}

// Hash table class definition
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	// this.get = get;
}

// put() method definition which places data in the hash table
function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

// showDistro() method definition which displays data in the hash table
function showDistro() {
	var n = 0;
	var i = 0;
	var L = this.table.length;
	for (i; i < L; i++) {
		if (this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

// TEST DATA
var s = new HashTable();
s.put("Cynthia");
s.put("Mike");
s.put("Jordan");
s.put("Brenda");
s.put("George");
s.put("Beverly Hills");
s.put("John");
s.put("Grayson");
s.put("Moses");
s.put("Lunatic");
s.showDistro();

// Better hashing function
function betterHash(string, arr) {
	var H = 37;
	var total = 0;
	var i = 0;
	var L = arr.length;
	for (i; i < L; i++) {
		total += H * total + arr.charCodeAt(i);
	}
	total = total % arr.length;
	return parseInt(total, 10);
}

// TESTING BETTER HASH FUNCTION
var someNames = ["Brenda", "Mike", "Joe", "Jane", "Doe", "Blake", "Yonah"];
var hTable = new HashTable();
var i = 0;
var L = someNames.length;
for (i; i < L; i++) {
	hTable.put(someNames[i]);
}
hTable.showDistro();

// HASHING INTEGER KEYS
/**
 * the dataset we will be working with is student grade and ID which we will generate
 * randomly.
 */

// generate random studID
function genRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate random studGrades
function genGrades(arr) {
	var i = 0;
	var L = arr.length;
	for (i; i < L; i++) {
		var num = "";
		var j = 1;
		for (j; j <= 9; j++) {
			num += Math.floor(Math.random() * 10);
		}
		num += genRandomInt(50, 100);
		arr[i] = num;
	}
}