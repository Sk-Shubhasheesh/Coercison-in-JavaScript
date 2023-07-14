
// Same interesting example of Coercion 

console.log(1 < 2 < 3); // Output -> true
/*
 Explanation -> JavaScript evaluate it like this (1<2) -> true -> true <3 = true because true represents 1 */

console.log(3 > 2 > 1); // output -> false
/*
Explanation -> (3>2) -> trur >1 = false  because true represents 1 and never 1 > 1 so its give false.  */