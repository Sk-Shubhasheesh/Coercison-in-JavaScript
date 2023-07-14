
console.log(null == undefined); // output -> true
/**
 Explanation - In documentation you find that in == equality operator if one value is null and one value is 
 undefined its return true.  */

console.log(12=="12") // output -> true
/*
Explanation - If any of the operant is the Number and other operant is the string it will convert the string to
number user ToNumber abstract operation than again do comparison.  */

console.log(false=="0");  // output -> true
/*
Explanation - If any of the operant is the boolean and other operant is the string it will convert both to
number  then again do comparison.  
In the above example when false convert to a number it value will become 0 and "0" will convert to 0 and then 
compare 0==0 return true */

let obj = {x:10, valueOf(){return 100;}}; 
console.log(99==obj); // output -> false
console.log(100==obj); // ouput -> true

/*
If one operant is number,string or symbol and another operant is object then object will convert to primitive
types using ToPrimitive Abstract operation.
*/

//Note - If none of the above rules follow we get false as output. For ex:
console.log(null == false) // output-> false



