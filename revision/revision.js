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

const multiplyArrayAndReturnPosOrNeg = (arrayOfNumbers) => {
    let total = arrayOfNumbers.reduce((acc, cur) => acc * cur);
    return total > 0 ? "Positive" : total < 0 ? "Negative" : "Zero";
}

class Student {
    Name;
    Marks;
    constructor(name, marks){
        this.Name = name;
        this.Marks = marks;
    }

    set setName(studentName) {
        return this.Name = studentName;
    }
    get getName() {
        return this.Name;
    }

    set setMarks(studentMarks) {
        return this.Marks = studentMarks;
    }
    get getMarks() {
        return this.Marks;
    }
}

let studentArr = [];

studentArr.push(new Student("James", 75));
studentArr.push(new Student("Rose", 80));
studentArr.push(new Student("Steve", 67));
studentArr.push(new Student("Jane", 89));
studentArr.push(new Student("Coleen", 52));

// console.log(studentArr);

const stundentsNamesOrMarks = (arrayOfStudents, field = "Names") => {
    let nameOrMarks = field.toLowerCase();
    console.log("field ==> ", nameOrMarks)
    let result = nameOrMarks == "names" ? arrayOfStudents.map(({Name}) => `${Name}`) 
    : nameOrMarks == "marks" 
    ? arrayOfStudents.map(({Marks}) => `${Marks}`) 
    : arrayOfStudents.map(({Name, Marks}) => `${Name}, ${Marks}`)
    console.log(result)

    let res;
    for(let i = 0; i < result.length; i++) result[i];

}

console.log(stundentsNamesOrMarks(studentArr))