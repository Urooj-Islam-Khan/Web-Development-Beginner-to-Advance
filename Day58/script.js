let child = document.querySelector(".child");
child.addEventListener("click", (e) => {
    // stopPropagation use islie krte k event bubbling ko stop krein 
    // event bubbling ka matlab k ap kisi pr event listen kroge to uske parent ka b event listener activate hojae ga for example ap hyderabad me rehte ho to technically ap pakistan me b rehte ho aese 
    e.stopPropagation();
    child.style.backgroundColor = "red"
    child.style.color = "white"
})

document.querySelector(".childContainer").addEventListener("click",
    (e) => {
        e.stopPropagation();
        alert("child container was clicked")
    })

document.querySelector(".container").addEventListener("click",
    (e) => {
        e.stopPropagation();
        alert("Container was clicked")
    })

function getrandomcolor() {
    let col1 = Math.ceil(0 + Math.random() * 255);
    let col2 = Math.ceil(0 + Math.random() * 255);
    let col3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${col1}, ${col2}, ${col3})`
}
function getrandomborder() {
    let col1 = Math.ceil(0 + Math.random() * 255);
    let col2 = Math.ceil(0 + Math.random() * 255);
    let col3 = Math.ceil(0 + Math.random() * 255);
    return `3px solid rgb(${col2}, ${col3}, ${col1})`
}
// to repeat anything in one second use this 
let a = setInterval(() => {
    document.querySelector(".childContainer").style.background = getrandomcolor();
    document.querySelector(".childContainer").style.border = getrandomborder()
}, 1000);

console.log(a);

// to stop the intervcal
clearInterval(a)

let b = setTimeout(() => {
    document.querySelector(".container").style.background = getrandomcolor();
    document.querySelector(".container").style.border = getrandomborder()
}, 1000);

clearTimeout(b)





