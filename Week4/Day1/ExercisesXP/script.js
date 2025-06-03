//  Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((item, i) =>
{
    console.log(`${i+1}# choice is ` + item);
})

if (colors.includes("Violet")) console.log("Yeah");
else console.log("No...");

// Exercise 2 : Colors #2

const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors2.forEach((item, i) => {
    let ending = i == 0 ? ordinal[1] : 
                i == 1 ? ordinal[2]:
                i == 2 ? ordinal[3]:
                ordinal[0];
    console.log(`${i+1}${ending} choice is ${item}`);
});

// Exercise 3 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);// ['U', "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); //[undefined, undefined]

// Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const welcomeStudents = users.map((item) => {return "Hello " + item.firstName;});
console.log(welcomeStudents);

const onlyFS = users.filter((value) => {return value.role === 'Full Stack Resident'});
console.log(onlyFS);

const onlyFSLastNames = users.filter((value) => {return value.role === 'Full Stack Resident'}).map((item) => {return item.lastName});
console.log(onlyFSLastNames);

// Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let singlString = epic.reduce((agregator, item) => {return agregator+ " " + item});
console.log(singlString);

// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter((item) => {return item.isPassed});
students.filter((item) => {return item.isPassed}).forEach((value) => {
    console.log(`Good job ${value.name}, you passed the course in ${value.course}`);
    
})

