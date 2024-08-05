function getData() {
    // Create and return a new Promise
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
            // Resolve the promise with the value "I am Urooj" after 3.5 seconds
            resolve("I am Urooj");
        }, 3500);
    });
}

console.log("loading module");

console.log("Do Something Else...");

console.log("Loading data");

// Call getData, which returns a promise, and assign it to the variable data
let data = getData();

// Use .then() to handle the resolved value of the promise
//this is callback approach
data.then((v) => {

    console.log(data);

    console.log("Process Data");

    console.log("task 2");
});

// Another .then() handler for the same promise to log the resolved value
data.then((value) => {
    // Log "Data Loaded:" followed by the resolved value ("I am Urooj")
    console.log("Data Loaded:", value);
});


