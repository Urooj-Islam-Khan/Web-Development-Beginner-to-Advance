// Access the container div element by its ID
const container = document.getElementById('container');
console.log(document.getElementById('container'));
// Access the h1 element inside the container
const heading = container.querySelector('h1');

// Access the p element inside the container
const paragraph = container.querySelector('p');

// Access all li elements inside the ul
const listItems = container.querySelectorAll('ul li');

// Log the text content of each element to the console
console.log("Heading:", heading.textContent);
console.log("Paragraph:", paragraph.textContent);
console.log("List Items:");
listItems.forEach(item => console.log(item.textContent));
