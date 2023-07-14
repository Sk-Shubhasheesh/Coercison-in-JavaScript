// Pepole says javaScript is weird but they don't know about fact

console.log("1"-1) // "1"-1 -> 1 - 1 = 0
/*
Explanation - According to ToNumber abstract operaction JavaScript convert string to a number so  "1" to 1 and 
than 1-1 = 0 */ 

console.log(10-null) // 10 - null -> 10 - 0 = 10 
/*
Explanation -beacuse according to ToNumber abstract operaction JavaScript convert null to 0 then 10 - 0 = 10
so output is 10 */

console.log(100-undefined) // 100 - undefined -> 100 - NaN = NaN
/*
Explanation -beacuse according to ToNumber abstract operaction JavaScript convert undefind to NaN so
100 - NaN = NaN */


console.log(1-"453") // 1 - 453 -> 452

console.log(1-"56sfhf") // 1- NaN  -> NaN

console.log(1-"0xa") // hexadecimal conversion

console.log(10-true) // 10 - 1 = 9



