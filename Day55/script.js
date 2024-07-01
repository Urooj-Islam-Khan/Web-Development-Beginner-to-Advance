let cont = document.querySelector(".container")
// ye container k baad hoga 
cont.insertAdjacentHTML("afterend", "<b>i am after end text </b>")
// ye container shuru hone k baad uske andr 
cont.insertAdjacentHTML("afterbegin", "<b>i am after begin text </b>")
// ye container shuru hone k baad uske andr 
cont.insertAdjacentHTML("beforeend", "<b>i am a before end text </b>")
// ye container shuru hone se phele uske bhar 
cont.insertAdjacentHTML("beforebegin", "<b>i am before begin text </b>")

//  to insert a <div> element before container
var divElement = document.createElement('div');
cont.insertAdjacentElement('beforebegin', divElement);


cont.insertAdjacentText('beforeend', ' This is some text.');

console.log(document.querySelector("p").remove()
)
// to take list of classes
console.log(document.querySelector(".container").classList)
// to take names of classes 
console.log(document.querySelector(".container").className)
// to add class 
console.log(document.querySelector(".container").classList.add("green"))
console.log(document.querySelector(".container").classList)
// to remove class 
console.log(document.querySelector(".container").classList.remove("green"))
console.log(document.querySelector(".container").classList)

// agr class hogi to hat jaegi na hoto lag jaegi
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList.toggle("red"))
console.log(document.querySelector(".container").classList)


