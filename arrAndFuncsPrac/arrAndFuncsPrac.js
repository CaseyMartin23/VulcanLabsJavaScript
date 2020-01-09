// Client Class
class Client {
    name;
    surname;
    age;
    email;
    yearsExperience;

    constructor(name, surname, email, age, yearsExperience) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.yearsExperience = yearsExperience;
    }

    set setName(nameEntered) {
        return this.name = nameEntered;
    }
    get getName() {
        return this.name;
    }

    set setSurname(surnameEntered) {
        return this.surname = surnameEntered;
    }
    get getSurname() {
        return this.surname;
    }

    set setAge(ageEntered) {
        return this.age = ageEntered;
    }
    get getAge() {
        return this.age;
    }

    set setEmail(emailEntered) {
        return this.email = emailEntered;
    }
    get getEmail() {
        return this.email;
    }

    set setYearsExperience(yearsEntered) {
        return this.yearsExperience = yearsEntered;
    }
    get getYearsExperience() {
        return this.yearsExperience;
    }

}

// An array of Client objects
let clientArr = [];
clientArr.push(new Client("John", "Doe", "johndoe@example.com", 32, 10));
clientArr.push(new Client("Gerrard", "Maxim", "gmax@example.com", 24, 4));
clientArr.push(new Client("Sally", "Sidwell", "sswel@example.com", 34, 3));
clientArr.push(new Client("Andrew", "Garfield", "spiderman@example.com", 21, 2));
clientArr.push(new Client("Peter", "Patterson", "ppat@example.com", 29, 5));
clientArr.push(new Client("Jonh", "Riley", "jriley@example.com", 44, 17));
clientArr.push(new Client("Garry", "Busey", "thebuseman@anotherexample.com", 59, 30));
clientArr.push(new Client("Jane", "Doe", "janedoe@anotherexample.com", 31, 9));
clientArr.push(new Client("Timmy", "Timmeh", "timmeh@example.com", 19, 1));

// function that returns the oldest person
const oldestPerson = (array) => {
    let peopleAge = [];
    
    let age = array.map(({ age }) => peopleAge.push(age));

    let oldest = Math.max(...peopleAge);

    let oldestperson = array.filter((person) => person.age == oldest);
    oldestperson = oldestperson.map(({name}) => name)

    return `The oldest person ===> ${oldestperson[0]}`;
}

// Function that sorts the array of clients form youngest to oldest
const sortYoungToOld = (array) => array.sort((a, b) => (a.age > b.age) ? 1 : -1);

//Function that returns the client searched for
const findAClient = (nameOfClient) => {
    return clientArr.filter((person) => person.name == nameOfClient);
}

// Function that removes a client searched for
const deleteAClient = (nameOfClient) => {
    let newArr = clientArr.filter(client => client.name != nameOfClient);
    return newArr;
}

// Function that incremnets all clients ages by one
const everybodiesBirthday = (arr) => {
    let newArr = [...arr]

    for(let i = 0; i < newArr.length; i++) newArr[i].age = newArr[i].age + 1;

    return newArr;
}

// Function that returns email domains of anotherexample.com  
const anotherDotComClients = (arr) => {
    let newArr = arr.filter(client => (client.email).includes("anotherexample.com"));
    
    return newArr;
}

// Function that take a new client then adds to array of choice
const addNewClient = (newClient, arr) => arr.push(newClient);

// Function returns how many clinets are in the age limit of choice
const legalAgeClients = (ageLimit) => {
    let count = 0;
    clientArr.map((client) => { if(client.age >= ageLimit) count += 1});
    return count;
}

// Function that returns an object with key-pair values of emails and ages
const clientEmailToAge = (arr) => {
    let obj = {};
    arr.map((client) => obj[client.email] = client.age);
    return obj
}

// Function that returns the total of years experience
const sumOfYearsOfExperience = () => {
    let sumOfYears = clientArr.map(({yearsExperience}) => yearsExperience)
        .reduce((acc, cur) => acc + cur);
    return sumOfYears;
}

// Function that returns all the clients last names
const allClientsLastNames = () => clientArr.map(({surname}) => surname);

// Function that returns the full name of all the clients
const allClientsFullNames = () => clientArr.map(({name, surname}) => `${name} ${surname}`);

// Function that returns all clients over the age of 30
const clientsOverThirty = () => clientArr.filter((client) => client.age > 30);

// Function that returns the clients with the last name of Doe
const clientsLastNameDoe = () => clientArr.filter((client) => client.surname == "Doe");

// Function that returns all cilents with anotherexample.com domains in their emails
const allClientsFromAnotherDotCom = () => clientArr.filter((client) => client.email.includes("anotherexample.com"));

const personnel = [
    {
      id:5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id:82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id:22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id:15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id:11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
];

// Function that returns the total of all the forceusers
const scoreOfForceUsers = () => {
    let total = personnel.filter((pilot) => pilot.isForceUser)
        .map(({pilotingScore, shootingScore}) => pilotingScore + shootingScore)
        .reduce((acc, cur) => acc + cur);
    return total;
}

