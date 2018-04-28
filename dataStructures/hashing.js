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

	// Method hash(private method of the Hashtable class)
	var hash = function(key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(key[i]); // Sum up the key ASCII
		}
		return hash % 37;
	};

	// Method for adding item to the Hashtable
	this.put = function(key, value) {
		var position = hash(key);
		console.log(position + " - " + key);
		table[position] = value;
	};

	// Method for retrieving value from the Hashtable
	this.get = function(key) {
		return table[hash(key)];
	};

	// Method for removing element from the Hashtable
	this.remove = function(key) {
		table[hash(key)] = undefined;
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
console.log(hash.get("Blake"));
hash.print();

/**
 * Collision happens when different key values hash to the same
 * hash value.
 * Techniques for handling collisions are: separate chaining,
 * linear probing, and double chaining.
 */

// Handling collision
