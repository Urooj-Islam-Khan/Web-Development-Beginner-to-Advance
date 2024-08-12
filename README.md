

# HTML Learning Guide By Urooj Islam

## 1. Basic Structure
The basic structure of an HTML document includes the doctype declaration, root element, and child elements.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: Root element of the HTML document.
- `<head>`: Contains meta-information, links to stylesheets, and the document’s title.
- `<body>`: Contains the content of the document.

## 2. Elements and Tags
HTML elements are the building blocks of HTML. Tags define the start and end of an element.

```html
<h1>Heading 1</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<img src="image.jpg" alt="Description of image">
<div class="container">This is a div</div>
<span>This is a span</span>
```

- `<h1>` to `<h6>`: Headings, with `<h1>` being the largest.
- `<p>`: Paragraph element.
- `<a href="...">`: Anchor element for links.
- `<img src="..." alt="...">`: Image element with a source and alternate text.
- `<div>`: Division element used for grouping.
- `<span>`: Inline container used for styling.

## 3. Attributes
Attributes provide additional information about HTML elements and are always specified in the opening tag.

```html
<a href="https://example.com" target="_blank">Visit Example</a>
<img src="logo.png" alt="Company Logo" width="100" height="100">
```

- `href`: URL for the link.
- `target="_blank"`: Opens the link in a new tab.
- `src`: Path to the image file.
- `alt`: Text displayed if the image cannot be loaded.
- `width` and `height`: Dimensions of the image.

## 4. Forms and Input Types
Forms collect user input and can include various input types.

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <input type="submit" value="Submit">
</form>
```

- `<form>`: Container for form elements.
- `action`: URL where form data is sent.
- `method`: HTTP method used to send data (`get` or `post`).
- `<label>`: Describes form controls.
- `<input>`: Various input types like text, email, password, and submit.

## 5. Links and Navigation
Links are used to navigate between pages or sections.

```html
<a href="https://example.com">Visit Example</a>
<a href="#section1">Go to Section 1</a>
```

- `href="https://example.com"`: External link.
- `href="#section1"`: Link to a specific section within the same page (using an ID).

## 6. Images and Media
Embedding media files like images, audio, and video.

```html
<img src="photo.jpg" alt="A beautiful scenery">
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

- `<img>`: Displays an image.
- `<audio>`: Embeds audio with controls.
- `<video>`: Embeds video with controls.

## 7. Semantic HTML
Semantic HTML elements clearly describe their meaning in a human- and machine-readable way.

```html
<header>
    <h1>Welcome to My Website</h1>
</header>
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
</main>
<footer>
    <p>Urooj Islam© 2024 My Website</p>
</footer>
```

- `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`: Define different parts of the page.

## 8. HTML5 Features
New elements and APIs introduced with HTML5.

```html
<section>
    <h2>Section Title</h2>
    <p>Section content...</p>
</section>
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
</figure>
```

- `<section>`: Represents a standalone section of content.
- `<figure>` and `<figcaption>`: Associates a caption with an image or other media.

## 9. Accessibility
Making web content accessible to all users, including those with disabilities.

```html
<img src="logo.png" alt="Company Logo">
<button aria-label="Close">X</button>
```

- `alt`: Provides alternative text for images.
- `aria-label`: Provides an accessible name for interactive elements.

## 10. Responsive Design
Techniques for making web pages look good on all devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- `<meta name="viewport">`: Ensures that the page scales correctly on different devices.

## 11. SEO Basics
Using HTML to improve search engine visibility.

```html
<title>Page Title</title>
<meta name="description" content="A brief description of the page content.">
```

- `<title>`: Sets the page title shown in search results.
- `<meta name="description">`: Provides a description of the page content for search engines.
  


# CSS Learning Guide  By Urooj Islam

## 1. Basic Syntax
CSS (Cascading Style Sheets) controls the layout and appearance of HTML elements.

**Syntax**:
```css
selector {
    property: value;
}
```

**Example**:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

- `selector`: Targets the HTML element to style (`h1` in this case).
- `property`: The CSS property to style (`color`, `font-size`).
- `value`: The value for the property (`blue`, `24px`).

## 2. Selectors
Selectors are used to target HTML elements for styling.

**Syntax**:
```css
/* Element Selector */
p {
    color: red;
}

/* Class Selector */
.my-class {
    background-color: yellow;
}

/* ID Selector */
#my-id {
    font-weight: bold;
}

/* Attribute Selector */
input[type="text"] {
    border: 1px solid gray;
}
```

- `Element Selector`: Targets elements by their tag name (`p`).
- `Class Selector`: Targets elements with a specific class (`.my-class`).
- `ID Selector`: Targets elements with a specific ID (`#my-id`).
- `Attribute Selector`: Targets elements with a specific attribute (`input[type="text"]`).

## 3. Box Model
The CSS Box Model describes the rectangular boxes generated for elements.

**Syntax**:
```css
/* Setting width, height, padding, border, and margin */
.element {
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    margin: 20px;
}
```

- `width` and `height`: Define the size of the element.
- `padding`: Space between the content and the border.
- `border`: The border surrounding the padding.
- `margin`: Space outside the border.

## 4. Layout Techniques
CSS provides several layout techniques to arrange elements on a page.

**Syntax**:
```css
/* Flexbox Layout */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Grid Layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

- `display: flex`: Enables Flexbox layout.
- `justify-content`: Aligns items horizontally in Flexbox.
- `align-items`: Aligns items vertically in Flexbox.
- `display: grid`: Enables Grid layout.
- `grid-template-columns`: Defines column sizes in Grid.
- `gap`: Sets the space between Grid items.

## 5. Typography
CSS controls the appearance of text.

**Syntax**:
```css
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    color: #333;
}

h1 {
    font-size: 2em;
    text-align: center;
}
```

- `font-family`: Sets the font type.
- `font-size`: Sets the size of the font.
- `font-weight`: Sets the thickness of the font.
- `line-height`: Sets the space between lines of text.
- `color`: Sets the text color.
- `text-align`: Aligns the text (e.g., center, left, right).

## 6. Colors and Backgrounds
CSS allows you to define colors and background images.

**Syntax**:
```css
body {
    background-color: #f4f4f4;
    background-image: url('background.jpg');
    background-size: cover;
}

h1 {
    color: #ff6347;
    background-color: #f0f0f0;
}
```

- `background-color`: Sets the background color.
- `background-image`: Sets a background image.
- `background-size`: Defines the size of the background image.
- `color`: Sets the text color.

## 7. Responsive Design
CSS techniques for making websites look good on all devices.

**Syntax**:
```css
/* Media Query for devices with max-width of 600px */
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
```

- `@media (max-width: 600px)`: Applies styles for screens narrower than 600px.
- `flex-direction: column`: Changes layout direction in Flexbox.

## 8. Transitions and Animations
CSS allows you to create smooth transitions and animations.

**Syntax**:
```css
/* Transition */
.element {
    transition: all 0.3s ease;
}

.element:hover {
    background-color: blue;
}

/* Animation */
@keyframes slide {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.animated {
    animation: slide 1s ease-out;
}
```

- `transition`: Smoothly changes property values over time.
- `@keyframes`: Defines the stages of an animation.
- `animation`: Applies the animation to an element.

## 9. Flexbox
A layout model for arranging elements in rows or columns.

**Syntax**:
```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
```

- `flex-direction`: Defines the direction of flex items (`row` or `column`).
- `justify-content`: Aligns flex items horizontally.
- `align-items`: Aligns flex items vertically.

## 10. CSS Grid
A layout model for creating complex, two-dimensional layouts.

**Syntax**:
```css
.grid-container {
    display: grid;
    grid-template-rows: 100px auto 100px;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
}

.grid-item {
    grid-column: span 2;
}
```

- `grid-template-rows` and `grid-template-columns`: Define the rows and columns of the grid.
- `grid-column`: Specifies how many columns an item should span.

## 11. Pseudo-classes
Pseudo-classes apply styles based on the state of an element.

**Syntax**:
```css
a:hover {
    color: red;
}

input:focus {
    border-color: blue;
}

p::first-line {
    font-weight: bold;
}
```

- `:hover`: Applies styles when an element is hovered over.
- `:focus`: Applies styles when an element is focused.
- `::first-line`: Styles the first line of a block-level element.

## 12. Pseudo-elements
Pseudo-elements allow styling of specific parts of an element.

**Syntax**:
```css
p::before {
    content: "Note: ";
    font-weight: bold;
}

p::after {
    content: ".";
}
```

- `::before` and `::after`: Insert content before or after an element's content.
- `content`: Specifies the content to insert.





# JavaScript Learning Guide By Urooj Islam

## 1. Basic Syntax
JavaScript is a programming language used to create dynamic content on webpages.

**Syntax**:
```javascript
// This is a single-line comment

/* This is a multi-line comment */

var variableName = value; // Declare a variable
```

**Example**:
```javascript
let greeting = "Hello, World!";
console.log(greeting); // Outputs: Hello, World!
```

- `var`, `let`, and `const`: Keywords for declaring variables.
- `console.log()`: Prints output to the console.

## 2. Data Types
JavaScript supports various data types.

**Syntax**:
```javascript
let number = 42;             // Number
let string = "Hello";        // String
let boolean = true;          // Boolean
let object = { key: "value" };// Object
let array = [1, 2, 3];       // Array
let func = function() {};    // Function
```

- `Number`, `String`, `Boolean`, `Object`, `Array`, `Function`: Different types of data in JavaScript.

## 3. Operators
JavaScript provides various operators for performing operations.

**Syntax**:
```javascript
let sum = 5 + 3;            // Arithmetic Operator
let isEqual = (5 == 5);     // Comparison Operator
let andCondition = (true && false); // Logical Operator
```

- `+`, `-`, `*`, `/`: Arithmetic Operators.
- `==`, `===`, `!=`, `!==`: Comparison Operators.
- `&&`, `||`, `!`: Logical Operators.

## 4. Functions
Functions are blocks of code designed to perform a particular task.

**Syntax**:
```javascript
// Function Declaration
function greet(name) {
    return "Hello, " + name;
}

// Function Expression
const square = function(number) {
    return number * number;
};

// Arrow Function
const add = (a, b) => a + b;
```

- `function`: Keyword for declaring a function.
- `return`: Specifies the value to return from the function.
- `=>`: Arrow function syntax.

## 5. Control Structures
Control structures help in making decisions and repeating tasks.

**Syntax**:
```javascript
// If-Else Statement
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}

// Switch Statement
switch (expression) {
    case value1:
        // Code to execute for value1
        break;
    case value2:
        // Code to execute for value2
        break;
    default:
        // Code to execute if no cases match
}
```

- `if`, `else if`, `else`: Conditional statements.
- `switch`, `case`, `default`: Switch-case control structure.

## 6. Loops
Loops are used to repeat a block of code multiple times.

**Syntax**:
```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Do-While Loop
let number = 0;
do {
    console.log(number);
    number++;
} while (number < 5);
```

- `for`, `while`, `do-while`: Different types of loops for iteration.

## 7. Arrays
Arrays are used to store multiple values in a single variable.

**Syntax**:
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Outputs: Apple

// Array Methods
fruits.push("Date");     // Add an item to the end
fruits.pop();            // Remove the last item
fruits.shift();          // Remove the first item
fruits.unshift("Apricot");// Add an item to the beginning
```

- `[]`: Array notation.
- `push()`, `pop()`, `shift()`, `unshift()`: Array methods for modifying arrays.

## 8. Objects
Objects are used to store collections of data.

**Syntax**:
```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
};

console.log(person.name); // Outputs: John
console.log(person.greet()); // Outputs: Hello, John
```

- `{}`: Object notation.
- `this`: Refers to the current object.

## 9. DOM Manipulation
JavaScript can be used to interact with and modify the DOM (Document Object Model).

**Syntax**:
```javascript
// Selecting an element
let element = document.getElementById("myElement");

// Changing content
element.innerHTML = "New Content";

// Adding an event listener
element.addEventListener("click", function() {
    alert("Element clicked!");
});
```

- `document.getElementById()`: Selects an element by ID.
- `innerHTML`: Changes the content of an element.
- `addEventListener()`: Attaches an event handler to an element.

## 10. Events
Events are actions that occur in the browser, such as user interactions.

**Syntax**:
```javascript
// Click Event
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Mouseover Event
document.getElementById("myElement").addEventListener("mouseover", function() {
    console.log("Mouse over element");
});
```

- `click`, `mouseover`, `keydown`: Common event types.

## 11. Error Handling
JavaScript allows handling errors using `try...catch`.

**Syntax**:
```javascript
try {
    // Code that may throw an error
    let result = riskyFunction();
} catch (error) {
    // Code to handle the error
    console.log("An error occurred: " + error.message);
} finally {
    // Code that always runs, regardless of error
    console.log("Finally block executed.");
}
```

- `try`, `catch`, `finally`: Blocks for handling exceptions.

## 12. Asynchronous JavaScript
JavaScript can handle asynchronous operations using callbacks, promises, and async/await.

**Syntax**:
```javascript
// Callback
function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
}

fetchData(data => console.log(data));

// Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

promise.then(data => console.log(data));

// Async/Await
async function fetchData() {
    let data = await new Promise(resolve => setTimeout(() => resolve("Data fetched"), 1000));
    console.log(data);
}

fetchData();
```

- `callback`: Function passed as an argument to another function.
- `Promise`: Object representing the eventual completion or failure of an asynchronous operation.
- `async/await`: Syntax for working with promises in a more readable way.

