// Hash Table Implementation

// the HashTable constructor functions
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

	// hash the key
	var index = this.hash(key);
	// if there is no existing node in this bucket - create one
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
		// if the first node has the same key - update the value
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
		// otherwise check next nodes until a match is found - then update
	} else {
		var currentNode = this.buckets[index];
		while (currentNode.next) {
			if (currentNode.next.key === key) {
				currentNode.next.value = value;
				return;
			}
			currentNode = currentNode.next;
		}
		// no match is found in next nodes - create new node
		currentNode.next = new HashNode(key, value)
	}

};

// method which will get HashNodes from our class
HashTable.prototype.get = function(key) {
	// hash the key to get the bucket
	var index = this.hash(key);
	// if bucket is empty - return null
	if (!this.buckets[index]) {
		return null;
		// otherwise search bucket until matching key is found - then return its value
	} else {
		var currentNode = this.buckets[index];
		while (currentNode) {
			if (currentNode.key === key) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}
	}
};

// method which will return array of all hashNodes
HashTable.prototype.retrieveAll = function() {
	var allNodes = [];
	for (var i = 0; i < this.numBuckets; i++) {
		var currentNode = this.buckets[i];
		while (currentNode) {
			allNodes.push(currentNode);
			currentNode = currentNode.next;
		}
	}
	return allNodes;
};