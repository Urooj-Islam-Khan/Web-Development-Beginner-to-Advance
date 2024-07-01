let boxes = document.getElementsByClassName("box")
console.log(boxes)


Array.from(boxes).forEach(e => {
    console.log(e)

    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
    e.style.border = "2px solid black"
});


function getrandomcolor() {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    // let val4 = 160;
    // let val5 = 200;
    return `rgb(${val1}, ${val2},${val3})`
}