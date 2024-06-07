console.log("Arrays in Javascript")

// creating an array 
let arr = [1, 4, 7, 10, 13]

console.log(arr);

// to find number of elements in array 
console.log(arr.length)

// to find element through index 
console.log(arr[0])

// arrays are mutable they can be change
arr[0] = 20;
console.log(arr)

// type of array
// in js arrrays are type of objects
console.log(typeof arr);

// to convert in string 
console.log(arr.toString());

// to remove comma and add something 
console.log(arr.join(" and "));

// ye last Element ko nikal kr return krdeta hai 
console.log(arr.pop());

// it will return array new length and add element in the last of array
console.log(arr.push(45), arr)

// pop last Element ko nikalta hai or shift phele ko 
console.log(arr.shift(), arr)

// to add new element in the begining 
console.log(arr.unshift("Urooj"), arr)
// shift or pop work same shift returns Element from begining and pop returns Element from last
// shift or pop work same shift adds Element from begining and pop adds Element from last and show length of array


// array elements can be deleted using deete operator
console.log(delete arr[4], arr)

// concat() used to join arrays

a = [1, 3, 5, 7, 9]
b = [2, 4, 6, 8, 0]
c = []
console.log(c.concat(a, b),) // don't chnage existing array

// sort() is udes to sort an array alphabetically
ar = [7, 6, 1, 5, 3, 2, 8, 9]
console.log(ar.sort())

let num = [1, 2, 3, 4, 5]
// starting two elements show index from where to delete and last two add two elements
console.log(num.splice(1, 2, 222, 333), num)

