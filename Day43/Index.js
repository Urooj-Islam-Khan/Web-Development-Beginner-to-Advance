console.log("Loops in Java Script")
// loops are used to perform repeatative tasks
// there are five types of loops in Java Script 
// for loops 
// for in loops 
// for of loops 
// while loops
// do while loops


// for loop 
let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i)
}

// for in loop used for object

let obj = {
    name: "Urooj",
    roll: 124,
    department: "Software Engineering"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// for off loop used for iteration

for (const c of "Urooj") {
    console.log(c)
}


// while loop

let num = 1
// while (num < 6) {
//     console.log(num)
//     num++;

// }


// do while loop 

do {
    console.log(num)
    num++;

} while (num < 6);