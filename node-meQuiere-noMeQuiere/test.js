// // Flatten one level:
// let array = [1, [2, [3]]];
// console.log(array);

// array.flat(3);
// // → [1, 2, [3]]
// console.log(array);

// // Flatten recursively until the array contains no more nested arrays:
// let arr = [];
// arr = array.flat(Infinity);
// // → [1, 2, 3]

// console.log(arr);

// getSomeRecords() returns us a promise for some
// data it will fetch
const getSomeRecords = () => {
    let promise = new Promise((resolve, reject) => {
        resolve = console.log("Got some records."),
        reject(err) = console.log(err);
    })
    return promise;
}
var pr = getSomeRecords();

// show the UI spinner while we get the data
const startSpinner = () => {
    console.log("Starting spinner.")
}
startSpinner();

const renderRecords = () => {
    console.log("Rendered records.")
}

const showError = () => {
    console.log("Show error.")
}

const hideSpinner = () => {
    console.log("hidingSpinner.")
}
pr
.then(renderRecords)   // render if successful
.catch(showError)      // show an error if not
.finally(hideSpinner)  // always hide the spinner

