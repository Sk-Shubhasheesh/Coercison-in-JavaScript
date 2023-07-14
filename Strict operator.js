
/*
console.log(NaN === NaN); // output -> false
/**
 Explanation - According to documentation of === operator if left opearnt is NaN does not care of right operand
 return false. */
 
 // console.log(0 === NaN);  // output - false
/*
 Explanation - According to documentation of === operator if one operand is NaN return false.*/

 // console.log(0 === -0);  // output -> true
 /**
  Explanation  - if one operand is 0 and another operand is -0 return true. */

  // console.log(10===10); // output -> true
/*
Explanation  - if both operand are the same number than return true.*/


let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:10};
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // false
console.log(obj1 === obj1); // true
console.log({x:10} === {x:10}) // false

/*
According to SameValueNonNumber If x and y are the same Object value, return true. Otherwise, return false.
it does not do key by key value pair comparison it just checks based on whether they are the same memory value or not.
*/


console.log("NaN" === "NaN")  // true
/*
 If Type is String, then If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices)
return true; otherwise, return false.
 */


console.log(null === null); // true
/*
If Type(x) is Null, return true.
 */

