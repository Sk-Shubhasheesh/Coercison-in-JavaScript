/* 
// Every Object has a toString function already define inside it . [object object] not a array it is an string
let obj = {};
console.log(obj.toString()); // [Object, object]

// lets override toString method 
let obj1 = {
    toString(){
        // by default gives[object object] but after overriding
        return "Hello";
    } 
};
console.log(obj1.toString()) // output -> Hello

// by default valueOf return same object 
let obj3 = {x:10};
console.log(obj3.valueOf()) // Output - {x:10} 

// lets override the valueOf method
let obj4 = {x:10, 
    valueOf(){
        return 10;
    }
};
console.log(obj4.valueOf()); // output = 10
*/






let obj = {};
console.log(10-obj); // Output - NaN
/*
Explanation - Subtract operator try to convert both of operant to a number 10 is already a number when it try to 
convert  obj to a number its used ToNumber Abstract operation and for object ToNumber abstract operation used another 
ToPrimitve abstract operation with hint value number and ToPrimitve call another abstract operation 
OrdinaryToPrimitive Abstraction operation. And in OrdinaryToPrimitive Abstraction operation if the hint is number
first call to valueOf method. obj.valueOf give as same object means valueOf could not convert it to primitive types 
than call toString method and obj.toString method gives [object, object] and this is string which is primitive type 
then return [objet,object].

Now the ToNumber abstract operation try to conevrt [object object] to a number it  beacome  a invalid number  and
   10-invalid number = NaN
And people see this and they say ooo javascript is so weird.



let obj1 ={};
console.log(obj1-obj1);  // Output = NaN  -> same things will happen 

*/






/*

let obj1 = {x:9, y:8};
console.log(100-obj1); // output => NaN


let obj2 = {x:7, 
    valueOf(){
        return 99;
    }
};

console.log(100-obj2); // Output = 1
/**
Explanation - obj2 is an object it will go for ToPrimitive inside ToPrimitive hint will be a number than it will 
call OrdinaryToPrimitive inside OrdinaryToPrimitive first call valueOf it gives me 99 and 99 is a primitive value so 
return it and ToNumber try to conver 99 which is alredy number than it return it and  100-99 = 1   
 */






/*
let obj3 = {x:8,
      toString(){
        return "88";
    }
}
console.log(90-obj3) // output = 2   

 Explanation - again go to ToPrimitive hint is a number than OrdinaryToPrimitive call ,hint is number so first valueOf
 method is call by default valueOf give same object which is not primitive in nature than toString method call 
 toString return "88" which is primitive in nature.
 Now ToNumber try to conver "88" to a number and converted it to a 88 and return it than 90-88 = 2    
 */




/*
 let obj4 = {x:7,
    toString(){
        return {}
    }
};
console.log(100-obj4) // Output  - TypeError

 Explanation - again go to ToPrimitive hint is a number than OrdinaryToPrimitive call ,hint is number so first valueOf
 method is call by default valueOf give same object which is not primitive in nature than toString method call 
 toString also gives an object  which is not primitive in nature. Sor it rrturn TypeError
 */





 let obj5 = {x:10};
 console.log(10+obj5); // output = 10[object object]
 /*
 Explanation -  hint is a number than OrdinaryToPrimitive call ,hint is number so first valueOf
 method is call by default valueOf give same object which is not primitive in nature than toString method call 
 toString gives [object, object] and this is string which is primitive type then return [objet,object].
 + operator concatenate ->  10+[objct object] so ouptut = 10[object object]
 
  */


 let obj6 = {};
 console.log(obj6);
 console.log("18" + obj6); //18[object Object] 
 console.log(18 + obj6)  // 18[object Object] 