"use strict";
let personWithAddress = {
    name: "Jhon",
    city: "Tel Aviv",
    street: "Ben Gurion",
    houseNumber: 1,
    age: 25
};
console.log(personWithAddress);
// Exercise 2: Type Guards with Union Types
function describeValue(value) {
    if (typeof value === "string") {
        return "This is a string";
    }
    else {
        return "This is a number";
    }
}
console.log(describeValue("hello"));
console.log(describeValue(42));
// Exercise 3: Type Casting
let someValue = "This is a string.";
console.log(someValue.length);
// Exercise 4: Type Assertions with Union Types
function getFirstElement(array) {
    const first = array[0];
    return typeof first === "string"
        ? first
        : first.toString();
}
console.log(getFirstElement(["hello", 123]));
console.log(getFirstElement([42, "world"]));
// Exercise 5: Generic Constraints
function logLength(element) {
    console.log(element.length);
}
logLength("hello");
logLength([1, 2, 3]);
logLength({ length: 10 });
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }
    else if (employee.position === "Developer") {
        return `${employee.name} is a Developer working in the ${employee.department} department.`;
    }
    else {
        return `${employee.name} holds the position of ${employee.position} in ${employee.department}.`;
    }
}
const emp1 = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "HR"
};
const emp2 = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
};
const emp3 = {
    name: "Charlie",
    age: 30,
    position: "Analyst",
    department: "Finance"
};
console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
console.log(describeEmployee(emp3));
//  Exercise 7: Type Assertions and Generic Constraints
function formatInput(value) {
    return value.toString();
}
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput(new Date()));
console.log(formatInput(["a", "b"]));
