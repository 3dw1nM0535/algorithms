/**
 * HashTable class also known as HashMap.
 *
 * Hashing consists of finding a value in a data structure
 * in the shortest time possible.
 * When using a hash function, we already know which position
 * the element is, so we can simple retrieve it rather than 
 * looping thro'
 * A hash function, is a function that, given a value, it 
 * will return an address in the table where the value is.
 */

// Creating a hash table
function Hashtable() {
	var table = [];

	// Helper class for handling collision
	var ValuePair = function(key, value) {
		this.key = key;
		this.value = value;
		this.toString = function() {
			return "[" + this.key + " - " + this.value + "]";
		}
	};

	// Method hash(private method of the Hashtable class)
	var hash = function(key) {
		var hash = 5381; // Initialize hash with a prime number
		for (var i = 0; i < key.length; i++) {
			hash += hash * 33 + key.charCodeAt(key[i]); // Sum up the key ASCII
		}
		return hash % 1013;
	};

	// Method for adding item to the Hashtable
	this.put = function(key, value) {
		var position = hash(key);
		if (table[position] == undefined) {
			table[position] = new ValuePair(key, value);
		} else {
			// To avoid collision
			let index = ++position;
			while (table[index] != undefined) {
				index++; // Avoid collision
			}
			table[index] = new ValuePair(key, value);
		}
	};

	// Method for retrieving value from the Hashtable
	this.get = function(key) {
		let position = hash(key);

		if (table[position] !== undefined) {
			if (table[position].key === key) {
				return table[position].value;
			} else {
				let index = ++position;
				while (table[index] === undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {
					return table[index].value;
				}
			}
		}
		return undefined;
	};

	// Method for removing element from the Hashtable
	this.remove = function(key) {
		let position = hash(key);

		if (table[position] !== undefined) {
			if (table[position].key === key) {
				table[position] = undefined;
			} else {
				let index = ++position;
				while (table[index] === undefined || table[index].key !== key) {
					index++;
				}
				if (table[index].key === key) {
					table[index] = undefined;
				}
			}
		}
		return undefined;
	};

	// Helper method for printing elements of the table
	this.print = function() {
		for (var i = 0; i < table.length; i++) {
			if (table[i] !== undefined) {
				console.log(i + ": " + table[i]);
			}
		}
	};
}

/**
 * USING THE HASH TABLE CLASS
 */

var hash = new Hashtable();
hash.put("Grandalf", "grandalf@gmail.com");
hash.put("Joe", "joe@gmail.com");
hash.put("Jane Doe", "doe@gmail.com");
hash.put("Millicent", "mill@gmail.com");
hash.put("Jack", "weller@gmail.com");

console.log(hash.get("Grandalf"));
console.log(hash.get("Millicent"));
console.log(hash.get("Joe"));
console.log(hash.get("Jack"));
hash.remove("Grandalf");
console.log(hash.get("Grandalf"));
hash.print();

/**
 * Collision happens when different key values hash to the same
 * hash value.
 * Techniques for handling collisions are: separate chaining,
 * linear probing, and double chaining.
 */
