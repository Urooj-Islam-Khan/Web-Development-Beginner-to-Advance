// The DOM(Document Object Model) is a programming interface that represents a web page as a tree structure, allowing JavaScript to interactively access, modify, and manipulate its elements.

// change title name 
document.title = "Urooj Islam"

// can see title of web page
console.log(document.title)
// can see body of web page
console.log(document.body)

// can change style of web page

document.body.style.backgroundColor = "Red"

// BOM = Browser Object Model
// BOM (Browser Object Model) is a programming interface that represents the web browser's windows and frames. It allows JavaScript to access the functionalities of the web browser such as window handling, navigation, and dialogs. Through BOM, developers can control browser functionality such as window size, location, history, and cookies

console.log("Hello World")

// to see child nodes 
console.log(document.body.childNodes
)
// to check child nodes 
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1].childNodes)

cont = document.body.childNodes[1];
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.childNodes[1].style.backgroundColor = "green")


// agre firstchild likheinge to sare nodes ajaeinge or age fisrtelementchild likheinge to just html nodes aeinge 
console.log(document.body.firstElementChild
)



document.body.firstElementChild.children
// sare element node miljaeinge

document.body.firstElementChild.children[0]
// phela node miljaega

document.body.firstElementChild.children[3].previousElementSibling
// ise phele wala html element miljae 

console.log(document.body.lastElementChild.previousElementSibling.rows)

