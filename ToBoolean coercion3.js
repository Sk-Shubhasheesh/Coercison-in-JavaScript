let x = 10;
console.log(!x); //output -> false
/*
Explanation - When we pass 10  ToBoolean abstract opertion give true because it is turthy value and not of x 
return its opposite that is false.   */

let y = undefined;
console.log(!y); // output -> true
/*
Explanation - Undefined is a falsy value so ToBoolean abstract opertion gives false because it is falsy value and
not of y return its opposite that is true.    */


if(y){
    console.log("It is Truthy");
}else{
    console.log("It is falsy");
}
// output -> It is falsy

// Explanation  - In this case y is undefind and in JavaScript undefind is a false value so it print It is falsy.
