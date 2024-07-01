let button = document.getElementById("btn")




// for click 
button.addEventListener("click", () => {
    document.querySelector("#btn").innerHTML = "<b>you were clicked</b>"
})

// for double click
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>you were clicked</b> Enjoy it ..."
})

button.addEventListener("contextmenu", () => {
    alert("Don't right click please")
})

// KeyboardEvent
// when use any key 
document.addEventListener("keydown", (e) => {
    console.log(e.key)
})

// function myfunc() {
//     document.querySelector(".box").innerHTML = "hello "
// }