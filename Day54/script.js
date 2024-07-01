// kisi element ki html pata krne k ie ye syntax use krte hain 
console.log(document.querySelector(".container").innerHTML)

// kisi element k text pata krne k ie ye syntax use krte hain 
console.log(document.querySelector(".box").innerText)

console.log(document.querySelector(".container").innerText)

// outerhtml me sare html code ajata hhai 
console.log(document.querySelector(".container").outerHTML)

// kisi ka element type pata krne k lie tag name or nodename  use krte hain 

console.log(document.querySelector(".container").tagName)

// node name sb k lie hota hai use but tag name elements k lie hote hain bs 
console.log(document.querySelector(".container").nodeName)

// iske andr ka text content pata krne k lie 
console.log(document.querySelector(".container").textContent)

console.log(document.querySelector(".container").hidden)
//  to make nit hidden 
// console.log(document.querySelector(".container").hidden = true)


// to insert html 

console.log(document.querySelector(".box").innerHTML = "I am Urooj")

// to check attribute 
console.log(document.querySelector(".box").hasAttribute("style"))

// to get Attribute
console.log(document.querySelector(".box").getAttribute("style"))

// to set attribute 
// console.log(document.querySelector(".box").setAttribute("style", "display: inline"))


console.log(document.querySelector(".container").attributes)

console.log(document.querySelector(".box").removeAttribute("style"))

// to change anywebsite 
console.log(
    document.designMode = "on"
)

// to know who created it
console.log(document.querySelector(".box").dataset)



// to create element using js 
let Span = document.createElement("span")  //div created
let div = document.createElement("div")  //div created
let div1 = document.createElement("div")  //div created
let div2 = document.createElement("div")  //div created
let div3 = document.createElement("div")  //div created
// to set a class 
div.className = "Newdiv"

// or 

div.setAttribute("class", "newDiv")
// to insert html 
Span.innerHTML = "<h1><i>Span</i> inserted by js</h1>"
div.innerHTML = "<h1><u>append</u> inserted by js</h1>"
div1.innerHTML = "<h1><u>prepend</u> inserted by js</h1>"
div2.innerHTML = "<h1><u>before</u> inserted by js</h1>"
div3.innerHTML = "<h1><u>after</u> inserted by js</h1>"
// to insert in existing html 
// .append jb b use krte hain to wo us element k akhir me dikhta hai but uski border k ander
document.querySelector(".box").append(div)

// .prepend jb b use krte hain to wo us element k phele  dikhta hai but uski border k ander
document.querySelector(".box").prepend(div1)

// .before jb b use krte hain to element phele me dikhta hai border se bhar 
document.querySelector(".box").before(div2)

// .after jb b use krte hain to element baad me dikhta hai border se bhar
document.querySelector(".box").after(div3)

// .prepend jb b use krte hain to element phele me dikhta hai
document.querySelector(".square").replaceWith(Span)








