const rotateString = (stringValue, numberOfRotations = 2) => {
    let lastChar;
    let str = stringValue.split('');
    for(let i = 0; i < numberOfRotations; i++){
        lastChar = str.splice((str.length - 1), 1);
        str = [lastChar, ...str];
    }
    return str.reduce((acc, cur) => acc + cur);
}

const reverse_a_number = (aNumber) => {
    let number = aNumber.toString().split('').reverse().join('');
    return Number(number);
}

const stringToUpperCase = (stringValue) => {
    let upperString = stringValue.split(' ').map(item => item.split(''));

    let firstChar = upperString.map(item => item.splice(0, 1)).map(item => item[0].toUpperCase());
        
    upperString = upperString.map((item, i) => `${firstChar[i]}${item.join('')} `).join('')

    return upperString;
}
    
console.log(stringToUpperCase("yeet meat treat feet"));
// stringToUpperCase();