console.log("Javascript Variable")
// in js variable can't be start with number and they are case sensitive
var a = true;
var b = 9.7;
var c = "Urooj";

// to print the output
console.log(b + c)
console.log(a)

// to know the type of the variable use keyword (typeof) 
console.log(typeof a, typeof b, typeof c)

// var is a globally scoped
// let and const are blocke scoped

// constant are decare with keyword (const)

const d = 6;
// const d = d + 2; this one is not allowed bcz it is constant it'll give an error

// pro programmer use let instead of var


let roll = 124


{
    let roll = 25
    console.log(roll)
}

console.log(roll)

// there are 7 primitive datatypes in JS
// null
// Number  25  124.5
// String "any thing in inverted commas"
// Symbol 
// undefined  a variable that has no value
// Boolean  True   False
// BigInt


let x = "Urooj"
let y = 22;
let z = 35.5;
const t = true;
let u = undefined;
let n = null;

console.log(x, y, z, t, u, n)
console.log(typeof x, typeof y, typeof z, typeof t, typeof u, typeof n)


// Objects in JavaScript are used to group related data and functions together for easier organization and access.

let intro = {
    "name": "Urooj",
    "roll number": 124
}

console.log(intro)

// to add something in object use  objectname.variabename = value.

intro.department = "Software Engineering";

console.log(intro)

