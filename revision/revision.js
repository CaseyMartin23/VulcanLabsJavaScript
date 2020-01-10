const rotateString = (stringValue, numberOfRotations = 2) => {
  let lastChar;

  try {
    if (typeof stringValue != "string")
      throw "Value entered is not a string ...";
    if (stringValue == "undefined" || stringValue == null)
      throw "A string is required continue ...";
    if (typeof numberOfRotations != "number")
      throw "Value entered is not a number ...";

    let str = stringValue.split("");
    for (let i = 0; i < numberOfRotations; i++) {
      lastChar = str.splice(str.length - 1, 1);
      str = [lastChar, ...str];
    }
    return str.reduce((acc, cur) => acc + cur);
  } catch (e) {
    console.log(e);
  }
};

const reverse_a_number = aNumber => {
  try {
    if (typeof aNumber != "number") throw "Value enterd is not a number ...";
    if (aNumber == "undefined" || aNumber == null)
      throw "A number is required continue ...";

    let number = aNumber
      .toString()
      .split("")
      .reverse()
      .join("");
    return Number(number);
  } catch (e) {
    console.log(e);
  }
};

const stringToUpperCase = stringValue => {
  try {
    if (typeof stringValue != "string") throw "Value enter is not a string ...";
    if (stringValue == "undefined" || stringValue == null)
      throw "A string is required continue ...";

    let upperString = stringValue.split(" ").map(item => item.split(""));

    let firstChar = upperString
      .map(item => item.splice(0, 1))
      .map(item => item[0].toUpperCase());

    upperString = upperString
      .map((item, i) => `${firstChar[i]}${item.join("")} `)
      .join("");

    return upperString;
  } catch (e) {
    console.log(e);
  }
};

const multiplyArrayAndReturnPosOrNeg = arrayOfNumbers => {
  try {
    if (typeof arrayOfNumbers != "object")
      throw "Value entered is not an array ...";
    if (arrayOfNumbers == "undefined" || arrayOfNumbers == null)
      throw "An array is required continue ...";
    arrayOfNumbers.forEach(item => {
      if (typeof item != "number") throw `Value/s are not number/s ...`;
    });

    let total = arrayOfNumbers.reduce((acc, cur) => acc * cur);

    if (total > 0) return (total = "Positive");
    if (total < 0) return (total = "Negative");
    else total = "Zero";

    return total;
  } catch (e) {
    console.log(e);
  }
};

class Student {
  Name;
  Marks;
  constructor(name, marks) {
    try {
      if (typeof name != "string") throw "Value entered is not a string ...";
      if (name == "undefined" || name == null) throw "Name is required ...";
      if (typeof marks != "number") throw "Value entered is not a number ...";
      if (marks == "undefined" || marks == null) throw "Marks are required ...";

      this.Name = name;
      this.Marks = marks;
    } catch (e) {
      console.log(e);
    }
  }

  set setName(studentName) {
    try {
      if (typeof studentName != "string")
        throw "Value entered is not a string ...";
      if (studentName == "undefined" || studentName == null)
        throw "A string is required continue ...";

      return (this.Name = studentName);
    } catch (e) {
      console.log(e);
    }
  }
  get getName() {
    try {
      return this.Name;
    } catch (e) {
      console.log(e);
    }
  }

  set setMarks(studentMarks) {
    try {
      if (typeof studentMarks != "number")
        throw "Value entered is not a number ...";
      if (studentMarks == "undefined" || studentMarks == null)
        throw "A number is required continue ...";

      return (this.Marks = studentMarks);
    } catch (e) {
      console.log(e);
    }
  }
  get getMarks() {
    try {
      return this.Marks;
    } catch (e) {
      console.log(e);
    }
  }
}

let studentArr = [];

studentArr.push(new Student("James", 75));
studentArr.push(new Student("Rose", 80));
studentArr.push(new Student("Steve", 67));
studentArr.push(new Student("Jane", 89));
studentArr.push(new Student("Coleen", 52));

// console.log(studentArr);

const studentsNamesOrMarks = (arrayOfStudents, field = "Names") => {
  try {
    if (typeof arrayOfStudents != "object")
      throw "Value entered is not an array";
    if (arrayOfStudents == "undefined" || arrayOfStudents == null)
      throw "An array is required continue ...";
    arrayOfStudents.forEach(student => {
      if (
        student.Name == "undefined" ||
        (student.Name == null && student.Marks == "undefined") ||
        student.Marks == null
      )
        throw "Invalid student entered in the array ...";
    });
    if (typeof field != "string") throw "Value entered is not a string ...";

    let nameOrMarks = field.toLowerCase();
    let result = [];

    if (nameOrMarks == "names") {
      result = arrayOfStudents.map(student => student.Name);
      return result.forEach(item => console.log(item));
    }
    if (nameOrMarks == "marks") {
      result = arrayOfStudents.map(student => student.Marks);
      return result.forEach(item => console.log(item));
    } else {
      result = arrayOfStudents.map(
        student => `${student.Name}, ${student.Marks}`
      );
      return result.forEach(item => console.log(item));
    }
  } catch (e) {
    console.log(e);
  }
};

const bestOrWorstStudentScore = (arrayOfScores, best = true) => {
  let result;

  try {
    if (arrayOfScores == [] || arrayOfScores == "undefined")
      throw "An array is required to continue ...";
    arrayOfScores.forEach(score => {
      if (score == "undefined" || score == null)
        throw "Invalid array, please enter a proper array";
    });

    if (best == true) return (result = Math.max(...arrayOfScores));
    if (best == false) return (result = Math.min(...arrayOfScores));
    else throw "Please enter true or false as an argument";
    return result;
  } catch (e) {
    console.log(e);
  }
};

// let studentScore = studentArr.map(student => student.Marks);

const bestOrWorstStudent = (arrayOfStudents, orderOfStudents = "best") => {
  try {
    if (arrayOfStudents == [] || arrayOfStudents == "undefined")
      throw "An array is required to continue";
    arrayOfStudents.forEach(student => {
      if (
        student.Name == "undefined" ||
        (student.Name == null && student.Marks == "undefined") ||
        student.Marks == null
      )
        throw "Invalid array, please enter a proper array";
    });

    let studentOrder = orderOfStudents.toLowerCase();
    let orderedStudents = arrayOfStudents.sort((a, b) => a.Marks - b.Marks);

    if (studentOrder == "best")
      return orderedStudents[orderedStudents.length - 1];
    if (studentOrder == "worst") return orderedStudents[0];
    else throw `Please enter "Best" or "worst" as an argument`;
  } catch (e) {
    console.log(e);
  }
};

const studentGrade = student => {
  try {
    if (
      student.Name == "undefined" ||
      (student.Name == null && student.Marks == "undefined") ||
      student.Marks == null
    )
      throw "Invalid student, please enter a proper student";

    if (student.Marks < 60) return "F";
    if (student.Marks < 70) return "D";
    if (student.Marks < 80) return "C";
    if (student.Marks < 90) return "B";
    if (student.Marks <= 100) return "A";
    else throw "Please insert an instance of a student";
  } catch (e) {
    console.log(e);
  }
};

const nameAndGrade = arrayOfStudents => {
  let obj = {};

  try {
    if (typeof arrayOfStudents != "object")
      throw "An array is required to continue ...";
    if (arrayOfStudents == [] || arrayOfStudents == "undefined") throw "";
    arrayOfStudents.forEach(student => {
      if (
        student.Name == "undefined" ||
        (student.Name == null && student.Marks == "undefined") ||
        student.Marks == null
      )
        throw "Invalid array, please enter a proper array";
    });

    arrayOfStudents.forEach(
      student => (obj[student.Name] = studentGrade(student))
    );

    return obj;
  } catch (e) {
    console.log(e);
  }
};

const studentsAboveEighty = arrayOfStudents => {
  try {
    if (typeof arrayOfStudents != "object")
      throw "An array is required to continue ...";
    if (arrayOfStudents == [] || arrayOfStudents == "undefine")
      arrayOfStudents.forEach(student => {
        if (
          student.Name == "undefined" ||
          (student.Name == null && student.Marks == "undefined") ||
          student.Marks == null
        )
          throw "Invalid array, please enter a proper array";
      });

    let result = arrayOfStudents.filter(student => student.Marks > 80);

    return result;
  } catch (e) {
    console.log(e);
  }
};

const averageStudentScore = arrayOfStudents => {
  try {
    if (typeof arrayOfStudents != "object")
      throw "An array is required to continue ...";
    if (array == [] || array == "undefined")
      throw "Invalid array, array is empty or undefined ...";
    arrayOfStudents.forEach(student => {
      if (
        student.Name == "undefined" ||
        (student.Name == null && student.Marks == "undefined") ||
        student.Marks == null
      )
        throw "Invalid array, please enter a proper array";
    });

    let total =
      arrayOfStudents
        .map(student => student.Marks)
        .reduce((acc, cur) => acc + cur) / arrayOfStudents.length;
    return total;
  } catch (e) {
    console.log(e);
  }
};

const triangleOfStars = () => {
  try {
    let triangle = "";
    for (let i = 0; i < 5; i++) {
      triangle += "* ";
      console.log(triangle);
    }
  } catch (e) {
    console.log(e);
  }
};

const lastElementOfArray = array => {
  try {
    if (typeof array != "object") throw "An array is required to continue ...";
    if (array == [] || array == "undefined")
      throw "Invalid array, array is empty or undefined ...";
    array.forEach(item => {});

    array[array.length - 1];
  } catch (e) {
    console.log(e);
  }
};

const andJoinAString = arrayOfstring => arrayOfstring.join(" and ");

const mergeTwoArr = (arrayOne, arrayTwo) => [...arrayOne, ...arrayTwo];
