/**
 * A set is a collection of unordered items that contain unique elements(no duplicates).
 * A set with no elements is called NULL SET or EMPTY SET.
 * A set also has some basic operation such as UNION, INTERSECTION & DIFFERENCE.
 * We will implement sets as JavaScript object as JavaScript objects do not allow
 * to have different properties with the same key hence unique element are guaranteed.
 */

function Set() {
	var items = {};

	// Method has() check if value exists in our set
	this.has = function(value) {
		return value in items;
	};

	// Method add() for adding elements to our set
	this.add = function(value) {
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};

	// Method remove() for removing element from our set
	this.delete = function(element) {
		if (this.has(element)) {
			delete items[element];
			return true;
		}
		return false;
	};

	// Method clear() for clearing our set
	this.clear = function() {
		items = {};
	};

	// Method size() for returning number of elements in our set
	this.size = function() {
		let count = 0;
		for(let key in items) {
			if (this.has(key)) {
				count++;
			}
		}
		return count;
	};

	// Method value() to return values in our set
	this.values = function() {
		let values = [];
		for (let key in items) {
			if (this.has(key)) {
				values.push(items[key]);
			}
		}
		return values;
	};

	// Method union() for returning new set with elements from both set
	this.union = function(set) {
		let unionSet = new Set();

		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		values = set.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		return unionSet;
	};

	// Method intersection(), given two sets, returns elements that exist in both sets
	this.intersection = function(set) {
		let intersectionSet = new Set();

		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (set.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};

	// Method difference(), given set A and B, return element not in A but in B
	this.difference = function(set) {
		let diffSet = new Set();

		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (!set.has(values[i])) {
				diffSet.add(values[i]);
			}
		}
		return diffSet;
	};

	// Method subset(), given set A and B, return A subset of b(or included in B).
	this.subset = function(set) {
		if (this.size() > set.size()) {
			return false;
		} else {
			let values = this.values();
			for (let i = 0; i < values.length; i++) {
				if (!set.has(values[i])) {
					return false;
				}
			}
			return true;
		}
	};
}

/**
 * SET TEST CASE
 */
let set = new Set();
set.add(100);
set.add(200);
set.add(900);
set.add(454);
set.add(300);
console.log(set.has(454));
console.log(set.values());
console.log(set.size());
set.delete(454);
console.log(set.has(454));
console.log(set.values());
set.add(300); // Check if duplicates can be added
console.log(set.size());
console.log();
console.log("Union set test case");

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
console.log(setA.values() + " - Set A");

let setB = new Set();
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(8);
console.log(setB.values() + " - Set B");

let unionAB = setA.union(setB);
console.log(unionAB.values() + " - Union of set A and set B");
console.log();
console.log("Intersection test case");

let setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
console.log(setC.values() + " - Set C");

let setD = new Set();
setD.add(2);
setD.add(3);
setD.add(5);
console.log(setD.values() + " - Set D");

let interSection = setC.intersection(setD);
console.log(interSection.values() + " - Intersection of set C and set D");
console.log();
console.log("difference test case");

let setE = new Set();
setE.add(1);
setE.add(2);
setE.add(3);
console.log(setE.values() + " - set E");

let setF = new Set();
setF.add(4);
setF.add(3);
console.log(setF.values() + " - set F");

let diff = setE.difference(setF);
console.log(diff.values() + " - Difference of set E and set F");
console.log();
console.log("Subset test case");
console.log(setE.subset(setA));
console.log(setC.subset(setD));
