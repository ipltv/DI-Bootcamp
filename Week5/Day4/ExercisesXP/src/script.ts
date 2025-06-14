// Exercise 1: Intersection Types
type Person = { name: string, age: number };
type Address = { city: string, street: string, houseNumber: number };

type PersonWithAddress = Person & Address;

let personWithAddress: PersonWithAddress = {
    name: "Jhon",
    city: "Tel Aviv",
    street: "Ben Gurion",
    houseNumber: 1,
    age: 25
}

console.log(personWithAddress);


// Exercise 2: Type Guards with Union Types

function describeValue(value: string | number): string{
    if (typeof value === "string"){
        return "This is a string";
    }
    else{
        return "This is a number";
    }
}

console.log(describeValue("hello"));
console.log(describeValue(42));


// Exercise 3: Type Casting

let someValue: any = "This is a string.";
console.log((someValue as string).length);

// Exercise 4: Type Assertions with Union Types

function getFirstElement(array: (string | number)[]): string {
    const first = array[0];
    return typeof first === "string"
        ? first
        : (first as number).toString();
}

console.log(getFirstElement(["hello", 123]));
console.log(getFirstElement([42, "world"]));

// Exercise 5: Generic Constraints

function logLength<T extends { length: number }>(element:T):void{
    console.log(element.length);
}

logLength("hello");
logLength([1, 2, 3]);
logLength({ length: 10 });


// Exercise 6: Intersection Types and Type Guards

type Employee = Person & Job;

type Job = {position: string; department: string;}

function describeEmployee(employee: Employee):string{
 if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer working in the ${employee.department} department.`;
    } else {
        return `${employee.name} holds the position of ${employee.position} in ${employee.department}.`;
    }
}

const emp1: Employee = {
    name: "Alice",
    age: 35,
    position: "Manager",
    department: "HR"
};

const emp2: Employee = {
    name: "Bob",
    age: 28,
    position: "Developer",
    department: "Engineering"
};

const emp3: Employee = {
    name: "Charlie",
    age: 30,
    position: "Analyst",
    department: "Finance"
};

console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
console.log(describeEmployee(emp3));


//  Exercise 7: Type Assertions and Generic Constraints

function formatInput<T extends {toString():string}>(value:T):string{
    return value.toString();
}

console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput(new Date()));
console.log(formatInput(["a", "b"]));
