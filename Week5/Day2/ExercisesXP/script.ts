//  Exercise 1: Hello, World! Program

let messageString: string = 'Hello World';
console.log(messageString);

// Exercise 2: Type Annotations

let age: number = 10;
let nameString: string = "Nils";
console.log(age, nameString);

//  Exercise 3: Union Types

let id: (string | number) = "id#1";
console.log(id);
id = 1;
console.log(id);

// Exercise 4: Control Flow with if...else

function checkNumberSign(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else return "Zero";
}

console.log(`The number 5 is: ${checkNumberSign(5)}`);
console.log(`The number -10 is: ${checkNumberSign(-10)}`);
console.log(`The number 0 is: ${checkNumberSign(0)}`);
console.log(`The number 100 is: ${checkNumberSign(100)}`);
console.log(`The number -0.5 is: ${checkNumberSign(-0.5)}`)

// Exercise 5: Tuple Types

function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
}
console.log(getDetails("Alice", 25));

// Exercise 6: Object Type Annotations


function createPerson(name: string, age: number): { name: string; age: number; } {
    return { name, age };
}

let person: {
    name: string;
    age: number;
}

person = createPerson("Vesta", 5);

console.log(person);


// Exercise 7: Type Assertions

let inputElement = document.getElementById("textElement") as HTMLInputElement | null;
if (inputElement) {
    console.log(inputElement.value);
}

// Exercise 8: switch Statement with Complex Conditions

function getAction(role: string): string {
    let result;
    switch (role) {
        case "admin":
            result = "Manage users and settings";
            break;
        case "editor":
            result = "Edit content";
            break;
        case "viewer":
            result = "View content";
            break;
        case "guest":
            result = "Limited access";
            break;
        default:
            result = "Invalid role";
            break;
    }
    return result;
}

// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

//  Exercise 9: Function Overloading with Default Parameters

function greet():string;
function greet(name:string):string;
function greet(name?:string):string{
    if (name){
        return `Hello, ${name}! Nice to see you!`
    }else{
        return `Hello, stranger! Nice to see you!`
    }
};

console.log(greet("Ilya"));
console.log(greet());
