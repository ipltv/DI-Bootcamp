// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//Output:I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info

function displayStudentInfo(objUser) {
    //destructuring
    let { first, last } = objUser;
    return `Your full name is ${first}  ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);

const doubleUsersArray = Object.entries(users).map(([key, value]) => [key, value * 2]);
console.log(doubleUsersArray);

// Exercise 4 : Person class

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member); //Output: object

//  Exercise 5 : Dog class
class Dog {
    constructor(name) {
        this.name = name;
    }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// Answer: Consctructor #2

//  Exercise 6 : Challenges


console.log([2] === [2]); //false 
console.log({} === {}); // false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4; //number = 4 
console.log(object2.number) //number = 4 
console.log(object3.number) //number = 4 
console.log(object4.number) //number = 5


class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, colocr) {
        super(name,type,color);
    }

    sound(soundPhrase){
        console.log(`${soundPhrase} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

const dog = new Animal("Jack", "Dog", "white");
const cat = new Animal("Barsik", "Cat", "black");
const dolphin = new Animal("Lari", "Dolphin", "grey");

const farmerCow = new Mammal("Murka", "Cow", "black");
farmerCow.sound("Moooo");