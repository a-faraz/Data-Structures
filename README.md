## Data Structures in JS

###### Febuary 9th, 2017
## Hash Table
- A table with a predetermined length, used to store data in each cell or "bucket"
- A key gets hashed with a hashing function and inserted based on the result.
- Modulo operator *%* is useful for handling large numbers to get them into an acceptable range.
- A "collision" occurs when the hashing function returns the same result for two values.
- Collisions can be dealt with in the following ways: 
	1. Having each bucket contain a linked list of elements which are hashed to that bucket.
	2. When full, the hash table can increase the number of buckets it has and redistribute the elements.
- Big O - *on average*
	1. search - constant time O(1)
	2. insert - constant time O(1)
	3. delete - constant time O(1)
