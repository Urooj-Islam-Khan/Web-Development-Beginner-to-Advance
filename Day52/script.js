console.log("Hello")

// selecting html by class
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[1].style.color = "Green"
boxes[2].style.backgroundColor = "red"

let pinkbox = document.getElementById("pinkbox")

pinkbox.style.backgroundColor = "Pink"

// selecting by selector it will select only first match 
document.querySelector(".box").style.border = "2px solid green"

// console.log(document.querySelectorAll(".box"))


// queryselectorall multiple selector deta hai node list me islie us pr style apply krne klie loops use krna prta hai 
document.querySelectorAll(".box").forEach(e => {
    e.style.borderRadius = "50%"
    console.log(e)
})


console.log(document.getElementsByTagName("div")) //ye sare div dega parent b child b

// ek css ko match ko element select krna 
// ye chk krega k pinkbox id hai usme ya nhi 
console.log(boxes[0].matches("#pinkbox"))  //true
console.log(boxes[3].matches("#pinkbox"))  //false

// to look for nearest ancestor that matches the given css selector 
console.log(boxes[0].closest(".container"))
console.log(boxes[0].closest("html"))


// ye ye chk krega k ek Elementdusra elemeent contain krta hai agr han to uye true dedega or ye khd pr b true krdega  agr ye chk krein k ye khd ko contain krta hai 
console.log(document.querySelector(".container").contains(boxes[3]))



console.log(document.querySelector("body").contains(document.querySelector(".container")))



