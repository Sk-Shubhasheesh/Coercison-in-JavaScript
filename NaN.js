console.log(Number("123")); // 123
console.log(Number("abcd")); // NaN
console.log(Number("oxa")); // NaN
console.log(Number("0xa")); // 10

// At some point of time we get a value you have a variable and check whether the value contain NaN or not 
let x = NaN;
console.log(x == NaN); // output -> false
/*
Explanation  - NaN never equal to itself.
*/
// IsNaN is a function which check value is NaN or not
console.log(isNaN(x)); // Output -> false

// but things become itreset

console.log(isNaN("shubhasheesh")); // output-> true but shubhasheesh is not NaN but its thorugh True as output
/*
isNaN function converst the incoming input to a number so it aplly the ToNumber conversion
*/

// In Order to resolve this another utility that is called as Number.isNaN
console.log(Number.isNaN("Sk")); // output -> false because  Number.isNaN does not use coersion 

// we can even make multipile solution like this
let x1 = 12
if(typeof(x1) == 'number' && x1 != x1){
    console.log(true);
}


