// Define an asynchronous function
async function processData() {
    console.log("loading module");
    // Log "loading module" to the console immediately

    console.log("Do Something Else...");
    // Log "Do Something Else..." to the console immediately

    console.log("Loading data");
    // Log "Loading data" to the console immediately

    // Wait for the promise returned by getData to resolve
    let data = await getData();
    // Execution pauses here until getData() resolves

    console.log("Data Loaded:", data);
    // Log "Data Loaded:" followed by the resolved value

    console.log("Process Data");
    // Log "Process Data" after the data has been loaded

    console.log("task 2");
    // Log "task 2" after "Process Data"
}

// Function that returns a promise
function getData() {
    // Simulate getting data from a server 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resolve the promise with the value "I am Urooj" after 3.5 seconds
            resolve("I am Urooj");
        }, 3500);
    });
}

// Call the async function
processData();
// Start the process of loading and processing data
