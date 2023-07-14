
/* y = 20;
console.log(y);
console.log(y.toString());
// manual boxing
console.log((10).toString())


/*const a = new Boolean(true)
if(a) console.log("it's true")// it's true
const b = new Boolean(false)
if(!b) console.log("never runs");// objects are “truthy.“
const c = Object(false)
if(!c) console.log("never runs"); // objects are “truthy.“ */
let x = new Boolean(true)
if(x) { 
    console.log("inside x")
}
let y= new Boolean(false)
if(!y) {
    console.log("inside y");
}
let z = Object(false)
if(!z) {
    console.log("inside z");
}

const b = Boolean(false)
if(!b.valueOf()) {
   console.log("its false");
}