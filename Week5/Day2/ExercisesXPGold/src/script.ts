// Exercise 1: Union Types
function processValue (value: string | number): string{
     if (typeof value === "string")
          return value.split('').reverse().join('');
     else return `$${value.toFixed(2)}`;
}
console.log(processValue(100));
console.log(processValue("$100.00"));


// Exercise 2: Array Type Annotations
function sumNumbersInArray(array: (number | string)[]):number{
     let sum : number = 0;
     array.forEach((item) => {
          if (typeof item === "number"){
               sum += item;
          }
     })
     return sum;
}

console.log(sumNumbersInArray([1, 2, 3]));                     // 6
console.log(sumNumbersInArray(["a", 1, "b", 2, "c", 3]));      // 6
console.log(sumNumbersInArray(["100", "200"]));               // 0
console.log(sumNumbersInArray([]));                           // 0
console.log(sumNumbersInArray([10, "20", 30, "hello"]));       // 40

// Exercise 3: Type Aliases

type AdvancedUser = {
     name: string,
     age: number,
     address?: string
}

function introduceAdvancedUser(user: AdvancedUser): string {
     let resultString = `Name: ${user.name}\nAge: ${user.age}`; 
     if (user.address)
     {
          resultString += "\nAddress: " + user.address;
     }
     return resultString;
}

console.log(introduceAdvancedUser({ name: "Alice", age: 30 }));
// Name: Alice Age: 30

console.log(introduceAdvancedUser({ name: "Bob", age: 40, address: "123 Main St" }));
// Name: Bob Age: 40 Address: 123 Main St


// Exercise 4: Optional Parameters

function welcomeUser(name: string, greeting?: string):string{
     return greeting && greeting.trim() !== "" ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}


console.log(welcomeUser("Alice"));                 // "Hello, Alice!"
console.log(welcomeUser("Bob", "Welcome"));        // "Welcome, Bob!"
console.log(welcomeUser("Charlie", "Hi"));         // "Hi, Charlie!"
console.log(welcomeUser("Diana", ""));             // "Hello, Diana!"

