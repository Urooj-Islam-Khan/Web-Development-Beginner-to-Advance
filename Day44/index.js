
function greeting(name) {
    console.log("hey " + name + " Good Morning")
    console.log("hey " + name + " how are you")
}

greeting("Urooj")

function sum(a, b, c = 3) {
    // console.log(a, "+", b, "=", a + b)
    return a + b + c;
}

result1 = sum(2, 3);
result2 = sum(5, 7);
result3 = sum(2, 9);
console.log(result1)
console.log(result2)
console.log(result3)

function table(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number, "*", i, "=", number * i);

    }

}

table(7)



// function ko variable ki trhn use krna
const funct1 = (x) => {
    console.log("i am arrow function", x)
}

funct1(34);