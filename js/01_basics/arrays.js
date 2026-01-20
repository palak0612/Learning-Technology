const y = [1,2,3]; // can hold multiple values of different data types
console.log(typeof y); // object
console.log();
// when arrays r copied, they r copied by reference
y.push(4);// adds 4 at the end of the array
y.pop(); // removes last element from the array
y.unshift(0); // adds 0 at the beginning of the array
console.log(y.includes());
console.log(y.indexOf(4)); // returns index of first occurrence of 4
y.splice(1,2); // removes 2 elements starting from index 1
joinedArray = y.join("-"); // joins all elements of array with - in between
console.log(joinedArray);//typeof joinedArray is string


