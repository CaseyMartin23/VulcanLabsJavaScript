// variable declaration
let hello = 'hello world!';
let varStr = "";

// splittng the string into an array
let strArr = hello.split("");

// function the flips the characters in the string
const strFlip = (arr) => {

    // stops funtion if array is empty
    if(arr.length == 0) return;
    /** 
        loops through the array and extracts the last character
        and then adds it too the empty string
        and then logs it
    */
    for(i = 0; i < arr.length; i ++) {
        if(arr.length == i + 1) {
            let lastChar = arr.splice(i, 1);            
            console.log(`${varStr += lastChar}\n`);
        }
    }
    // this calls the function and creates a recrusive function
    strFlip(arr);
}

strFlip(strArr);