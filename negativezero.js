let x = -0;
console.log(x===0); // output -> ture
/**
 It be problamatic beacue it gives true 0 === -0 and aslo
 give true 0 === 0
 So how we can check wheter value is -0 or not
 */
// solution
console.log(Object.is(x , 0)); //false
console.log(Object.is(x, -0)); // true

// apart from this another usinig Math.sing we check what is sign of the value
console.log(Math.sign(-3)); // -1
console.log(Math.sign(2));  // 1
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0));  // 0
