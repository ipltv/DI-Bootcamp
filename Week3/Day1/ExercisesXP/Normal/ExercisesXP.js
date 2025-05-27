// Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
console.log(people)
people.splice(2, 1, "Jason")
console.log(people)
people.push("Ilya")
console.log(people)
console.log(people.indexOf("Mary"))
let people_copy = people.slice(1,people.length-1)
console.log(people_copy);
console.log(people_copy.indexOf("Foo"));
let last = people_copy.slice(people_copy.length-1)
console.log(last);

for (person of people) {
    if (person === "Devon") break;
    console.log(person)
}

// Exercise 2 : Your favorite colors

const colors = ["white", "black", "grey", "pink", "red"]
const suffixes = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++){
    if (i < 3){
        console.log(`My ${i+1}${suffixes[i]} choice: ${colors[i]}`);
   
    }
    else{
        console.log(`My ${i+1}${suffixes[3]} choice: ${colors[i]}`);
    }
}

//  Exercise 3 : Repeat the question
let phone_number;
do {
    phone_number = prompt("Please input a number:");
} while (Number(phone_number) < 10);


//  Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(`The number of floors in the building ${building.numberOfFloors}`);
console.log(`There are ${building.numberOfAptByFloor.firstFloor} appartment(s) on the first floor, and ${building.numberOfAptByFloor.thirdFloor} on the third`);
console.log(`The name of the second tenant is ${building.nameOfTenants[1]} and the number of rooms he has is ${building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]}.`);

if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1] > building.numberOfRoomsAndRent["dan"][1]) {
    building.numberOfRoomsAndRent["dan"][1] = 1200
    console.log("The sum of Sarah’s and David’s rent is bigger than Dan’s rent. Than increase Dan’s rent to 1200")
}

// Exercise 5 : Family

const family = {
    "Jhon" : "Petrosyanov",
    "Nils" : "Barsikovich",
    "Kevin" : "Smith"
}

console.log("Family Keys:")
for (x in family){
    console.log(x)
}

console.log("Family Values:")
for (x in family){
    console.log(family[x])
}

// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let result = ""
const keys = Object.keys(details)

for (let i = 0; i < keys.length; i++){
    let key = keys[i]
    result += key + " " + details[key] + " "
}
result = result.trim()
console.log(result)

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let society_name = ""
for (member_name of names){
    society_name += member_name[0]
}
society_name = society_name.split("").sort().join("")
console.log(society_name)