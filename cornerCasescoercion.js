

    // Coerner Cases of Coercion


// ToString -> "" + value
console.log("" + 0); // 0 -> "0" so Output -> 0
console.log("" + (-0)); // -0 -> 0 so output -> 0

console.log("" + []); // []-> "" so ouptut -> empty string
console.log("" + {}); // output = [object object]

console.log("" + [1,2,3]); // output-> 1,2,3 
console.log("" + [null, undefined]); // output - ,

console.log("" + [1,2,null,3]); // output -> 1,2,,3

// ToNumber
console.log(0-"010"); // output -> -10
console.log(0 - "o10"); // output -> NaN
console.log(0-010); // 010 convert octal to decimal so output -> -8
console.log(0-"0xb"); // 0xb convert hexadecimal to decimal so output -> -11
console.log(0 - 0xb); // output -> -11
console.log(0 - []); // output -> 0 (here empyt array will become 0)
console.log(1 - []);  // output -> 1
console.log([] - 1);  // output -> -1
console.log([""] - 1); // array with empty string also become 0 so 0-1 -> -1
console.log(["0"] - 1); // output -> -1
console.log([6] - 1); // output -> 5


