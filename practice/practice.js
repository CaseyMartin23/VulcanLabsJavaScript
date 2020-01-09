// let n = 2134;

// try {
//     throw n;
// } catch(e) {
//     if(e <= 50) {
//         console.log("this expection was between 1 - 50");
//     } else {
//         console.log("Exception was outside the range of 1 - 50");
//         throw e;
//     }
// }


let sum = [1, 1, 2, 3, 4];
console.log(sum.reduce((acc, currV) => acc + currV));