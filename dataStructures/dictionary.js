/**
 * In Dictionary, we store values in pairs [key, value].
 * The same goes for hashes, we store values in pairs[key, value].
 * The key is used to find the element or value.
 * Dictionary is also known as MAP.
 */

function Dictionary() {
	var items = {};

	// Method for checking if key exists in the Dictionary
	// and return true if true, otherwise false
	this.has = function(key) {
		return key in items;
	};

	// Method adds new item to the Dictionary or update existing key
	this.set = function(key, value) {
		items[key] = value;
	};

	// Method for removing value from the dictionary using a key
	this.delete = function(key) {
		if(this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	// Method for searching a specific value by the key
	this.get = function(key) {
		return this.has(key) ? items[key] : undefined;
	};

	// Method for retrieving an array of all the values
	// instance present in the Dictionary
	this.values = function() {
		var values = [];
		for (var k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	// Method to return all the keys in our Dictionary class
	this.keys = function() {
		return Object.keys(items);
	};

	// Method to return the Dictionary items
	this.getItems = function() {
		return items;
	};

	// Method to return number or length
	// of Dictionary items
	this.size = function() {
		return Object.keys(items).length;
	};

	// Method to clear dictionary
	this.clear = function() {
		items = {};
	};
}

/**
 * USING THE DICTIONARY CLASS
 */

var dictionary = new Dictionary();
dictionary.set("Griffin", "griffin23@gmail.com");
dictionary.set("Blake", "yonah1@gmail.com");
dictionary.set("Mike", "mike@gmail.com");
dictionary.set("Brenda", "brendakemboi@gmail.com");

console.log(dictionary.has("Blake"));
console.log(dictionary.size());
console.log(dictionary.get("Blake"));
console.log(dictionary.values());
console.log(dictionary.getItems());
dictionary.delete("Blake");
console.log(dictionary.has("Blake"));
console.log(dictionary.size());
console.log(dictionary.get("Blake"));
console.log(dictionary.values());
console.log(dictionary.getItems());
dictionary.clear();
console.log(dictionary.values());
console.log(dictionary.size());
console.log(dictionary.getItems());
