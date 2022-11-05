let car = 'toyota';
let arr = ["dog",4,6,8,9];

console.log(); // empty space, to make it more readable

// Tests for equality and inequality with strings
console.log("\"35\" == 35 :","35" == 35) // true
console.log("\"35\" === 35 :","35" === 35) // false


// Tests using the lower case function
console.log(car == car.toUpperCase()); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(8 == 10); //false
console.log(2 < 4); //true
console.log(7 <= 7); //true
console.log(4 < 3); //false
console.log(); // empty space

// Tests using "and" and "or" operators
console.log((8 < 10) && (5 > 2)); //true
console.log((4 > 7) && (2 > 3)); //false
console.log((8 > 6) || (4 > 6)); //true
console.log(); // empty space

// Test whether an item is in a array
console.log(typeof arr == "array") // false
console.log(typeof arr == "object") // true
console.log(arr[0] == "dog") //true
console.log();


// Test whether an item is not in a array
console.log(arr[0] == "car") //true

console.log(); // empty space, to make it more readable