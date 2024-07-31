function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log("loading module")

console.log("Do SOmething Else...")

console.log("Load data")

let data = getData()
console.log(data)

console.log("Process Data")

console.log("task 2")