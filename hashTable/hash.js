// Hash Table Implementation

// the HashTable class
function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}


// method which will hash our key
HashTable.prototype.hash = function(key) {
	var total = 0;
	for (var i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	var bucket = (total % this.numBuckets);
	return bucket;
	
};

// method which will add HashNodes to our class
HashTable.prototype.insert = function(key, value) {
	// body...
};

// method which will get HashNodes from our class
HashTable.prototype.get = function(key) {
	// body...
};

HashTable.prototype.retrieveAll = function(first_argument) {
	// body...
};