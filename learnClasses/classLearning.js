/**
 * What are classes?
 * 
 *  Classes are special functions that mimic 
 *  inheritance like in other class based languages
 *  Just that in Javascript its prototypical
 * 
 * What are they used for?
 * 
 *  Classes are used to create many objects but uses the same
 *  base methdos and properties
 *  And these objects all use the/their class as a blueprint
 * 
 * What do you gain when using them?
 * 
 *  We save time and effort and the occurance of repetitve code
 *  which optimizes our code at the end of the day
 * 
 */

// parent class Mammal
class Mammal {
    age;
    name;
    constructor(age, name){
        this.age = age;
        this.name = name;
    }

    walk(){
        console.log(`${Mammal.name} walks`)
    }
    sleep(){
        console.log(`${Mammal.name} sleeps`)
    }
    eat(){
        console.log(`${Mammal.name} eat`);
    }
    poop(){
        console.log(`${Mammal.name} poops`);
    }
    speak(){
        console.log(`${Mammal.name} says hi!`);
    }
    set setAge(value) {
        try {
            
            if(value < 0 || (typeof value) == "string") throw "Entered invalid age";
            else return this.age = value;

        } catch (e) {
            console.log(e)
        }
    }
    get getAge() {
        return this.age;
    }
    set setName(name) {
        return this.name = name;
    }
    get getName() {
        console.log(this.name);
    }
    ageIs() {
        console.log(`Age ===> ${this.getAge}`);
    }

}

// child class Dog
class Dog extends Mammal {
    
    fetch(){
        console.log(`${Dog.name} fetched`);
    }
    rollOver(){
        console.log(`${Dog.name} rolls over`);
    }
    playDead(){
        console.log(`${Dog.name} is dead now...`);
    }
    speak(){
        console.log(`${Dog.name} says bark!`);
    }
    
}

// child class Cat
class Cat extends Mammal {
    
    groom(){
        console.log(`${Cat.name} is grooming...`);
    }
    vommit(){
        console.log(`${Cat.name} Barf!`);
    }
    scratchHuman(){
        console.log(`${Cat.name} scratches it's human`);
    }
    ignoreHuman(){
        console.log("......");
    }
    speak(){
        console.log(`${Cat.name} says meow!`);
    }
    
}

// child class sloth
class Sloth extends Mammal {
    
    scratchSelf(){
        console.log(`${Sloth.name} is scratching itself`);
    }
    hangFromTree(){
        console.log(`${Sloth.name} is just hang around on some trees`);
    }
    swims(){
        console.log(`${Sloth.name} swims accross the lake`);
    }
    smiles(){
        console.log(`${Sloth.name} is smiling at you ...`);
    }
    speak(){
        console.log(`${Sloth.name} says Squeak!`);
    }
    
}

// child class lion
class Lion extends Mammal {
    
    hunt(){
        console.log(`${Lion.name} is hunting`);
    }
    playWithCubs(){
        console.log(`${Lion.name} is playing with cubs`);
    }
    patrolling(){
        console.log(`${Lion.name} is patrolling the edges of the grass...`);
    }
    carryingCubs(){
        console.log(`${Lion.name} is carryin it's cubs`);
    }
    speak(){
        console.log(`${Lion.name} says Roaw!`);
    }
    
}

// child class elephant
class Elephant extends Mammal {
    
    mudBath(){
        console.log(`${Elephant.name} is bathing in mud`);
    }
    playWithOthers(){
        console.log(`${Elephant.name} is playing and socializing with other elephants`);
    }
    waterGames(){
        console.log(`${Elephant.name} is playing with some water`);
    }
    playWithBall(){
        console.log(`${Elephant.name} is kicking the football around`);
    }
    speak(){
        console.log(`${Elephant.name} says honk!`);
    }
    
}

// child class kangaroo
class Kangaroo extends Mammal {
    
    putJoeyInPouch(){
        console.log(`${Kangaroo.name} puts little joey in pouch`);
    }
    jumpAround(){
        console.log(`${Kangaroo.name} is jumping around field`);
    }
    kicks(){
        console.log(`${Kangaroo.name} kicks you in the face`);
    }
    punch(){
        console.log(`${Kangaroo.name} punched you in the face`);
    }
    speak(){
        console.log(`${Kangaroo.name} says Cluck!`);
    }
    
}

// child class crow
class Crow extends Mammal {
    
    fly(){
        console.log(`${Crow.name} flies in the big blue sky`);
    }
    makesNest(){
        console.log(`${Crow.name} is mkaing a nest`);
    }
    feedsBabies(){
        console.log(`${Crow.name} chews up worms and feed little crows`);
    }
    picksUpShinyThing(){
        console.log(`${Crow.name} smiles at you, and then steels your food`);
    }
    speak(){
        console.log(`${Crow.name} says Howl!`);
    }
    
}

// this creates a object called myMammal
console.log("============= this is mammal =============");
const myMammal = new Mammal(13);
myMammal.ageIs();
myMammal.speak();
myMammal.setName = "myMammal";

// this creates a object called myCat
console.log("\n============= this is cat =============");
const myCat = new Cat(24);
myCat.ageIs();
myCat.groom();
myCat.setName = "myCat";

// this creates a object called mySloth
console.log("\n============= this is sloth =============");
const mySloth = new Sloth(38);
mySloth.ageIs();
mySloth.hangFromTree();
mySloth.setName = "mySloth";

// this creates a object called elephant
console.log("\n============= this is elephant =============");
const myElephant = new Elephant(110);
myElephant.ageIs();
myElephant.mudBath();
myElephant.setName = "myElephant";

// this creates a object called lion
console.log("\n============= this is lion =============");
const myLion = new Lion(20);
myLion.ageIs();
myLion.speak();
myLion.setName = "myLion";

// this creates a object called crow
console.log("\n============= this is crow =============");
const myCrow = new Crow(16);
myCrow.ageIs();
myCrow.makesNest();
myCrow.setName = "myCrow";

// this creates a object called kangaroo
console.log("\n============= this is kangaroo =============");
const myKangaroo = new Kangaroo(10);
myKangaroo.ageIs();
myKangaroo.kicks();
myKangaroo.setName = "myKangaroo";

// this creates a object called myDog
console.log("\n============= this is my dog =============");
const myDog = new Dog(17);
myDog.setAge = 4;
myDog.getAge;
myDog.ageIs();
myDog.playDead();
myDog.setName = "myDog";

// this creates a object called neighboursDog
console.log("\n============= this is my neighbours dog =============");
const neighboursDog = new Dog(89);
neighboursDog.setAge = 13;
neighboursDog.getAge;
neighboursDog.ageIs();
neighboursDog.rollOver();
neighboursDog.setName = "neighboursDog";

// tihs creates a object called randomDog
console.log("\n============= this is a random dog =============");
const randomDog = new Dog(567);
randomDog.setAge = -5;
console.log(randomDog.age);
randomDog.setAge = "five";
console.log(randomDog.age);
randomDog.setAge = 5;
console.log(randomDog.age);
randomDog.getAge;
randomDog.ageIs();
randomDog.fetch();
randomDog.setName = "randomDog";

// this declares a variable called mammalArr which is an array of objects
const mammalArr = [
    myMammal,
    myCat,
    myCrow,
    myElephant,
    myKangaroo,
    myLion,
    mySloth,
    myDog,
    neighboursDog,
    randomDog
];

/** 
 * this creates a function that takes a 
 * array of objects and then checks if it has a 
 * "fly" property/method and then stores it in an array
 * and the returns that array
 */
const flyingAnimals = (arr) => {

    let flyAnimals = [];

    try {

        if(arr.length < 1) throw "our animal array can not be empty";
        else {

            for(let i = 0; i < arr.length; i++) 
                if(arr[i].fly) flyAnimals.push(arr[i].name);

            console.log(flyAnimals);
            return flyAnimals;

        }

    } catch(e) {
        console.log(e);
    }
}

flyingAnimals(mammalArr);
flyingAnimals([]);

/** 
 * this creates a funtion that takes an array of objects
 * and then checks if the getAge property/method returns a
 * value more then 7 and then stores and returns an array
 * of values
 */
const olderThenSeven = (arr) => {

    let oldEnough = [];

    for(let i = 0; i < arr.length; i++)
        if(arr[i].getAge > 7) oldEnough.push(arr[i].name);
    
    console.log(oldEnough);
    return oldEnough;
}

olderThenSeven(mammalArr);