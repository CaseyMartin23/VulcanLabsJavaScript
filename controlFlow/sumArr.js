// creates a function that sum an array with step
const sumArr = (arr, step = 1) => {
    // variabke declaration
    let sum = 0;
    // loops through array and add item of index to sum
    for(let i = 0; i < arr.length; i+=step) sum += arr[i];
    // returns sum
    return sum;
    
}

module.exports = sumArr;