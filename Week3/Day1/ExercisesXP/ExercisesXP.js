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