// Exercise 1: Class Inheritance with Protected Access Modifiers
class Employee {
     constructor(
          protected name: string,
          protected salary: number
     ) { }

     getDetails(): string {
          return `Employee name: ${this.name}\nSalary: ${this.salary}`;
     }
}

class Manager extends Employee {
     constructor(
          public department: string,
          name: string,
          salary: number) {
          super(name, salary)
     }

     getDetails():string{
          return super.getDetails() + `\nDepartment: ${this.department}`;
     }
}

// Exercise 2: Using Readonly with Access Modifiers

class Car{
     constructor(
          public readonly make: string,
          private readonly model: string,
          public year: number
     ){}

     getCarDetails(){
          return `--Car Data--\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`;
     }
}

const volvoCar = new Car("Volvo", "S60", 2024);

//Next line trigers compile error due read-only modifier for 'make' property.
//volvoCar.make = "Renault";

//Follow line rise an error becouse tries to get access to private filed that can be reached only within class-declaration.
//volvoCar.model = "S90";

// Exercise 3: Static Properties and Methods in Classes
class MathUtils{
     public static PI: number = 3.14159;
     public static circumference(radius:number) {
          return 2 * this.PI * radius;
     }
}

console.log(MathUtils.circumference(1));
console.log(MathUtils.circumference(6));

// Exercise 4: Interface with Function Types

interface Operation {execute(a: number, b:number):number};

class Addition implements Operation{
     execute(a:number, b:number):number {return a + b};
}

class Multiplication implements Operation{
     execute(a:number, b:number):number {return a * b};
}

const adder = new Addition();
const multiplier = new Multiplication();

console.log("Addition (5, 3):", adder.execute(5, 3));  
console.log("Multiplication (5, 3):", multiplier.execute(5, 3));

// Exercise 5: Extending Interfaces with Optional and Readonly Properties
interface Shape {
     color: string,
     getArea():number
}
interface Rectangle extends Shape{
     readonly width: number,
     readonly height: number,
     getPerimeter(): number
}

class Rect implements Rectangle{
     constructor(
          readonly width: number,
          readonly height: number,
          public color: string
     ){}
     getArea(): number {
          return this.width * this.height;
     }
     getPerimeter(): number {
          return this.width * 2 + this.height * 2;
     }
}

const square = new Rect(2,2,"black");
const rec = new Rect(3,4,"orange");

console.log("Testing square:");
console.log(`Color: ${square.color}`);                    // Output: black
console.log(`Width: ${square.width}`);                    // Output: 2
console.log(`Height: ${square.height}`);                  // Output: 2
console.log(`Area: ${square.getArea()}`);                 // Output: 4
console.log(`Perimeter: ${square.getPerimeter()}`);       // Output: 8

console.log("\nTesting rectangle:");
console.log(`Color: ${rec.color}`);                       // Output: orange
console.log(`Width: ${rec.width}`);                       // Output: 3
console.log(`Height: ${rec.height}`);                     // Output: 4
console.log(`Area: ${rec.getArea()}`);                    // Output: 12
console.log(`Perimeter: ${rec.getPerimeter()}`);          // Output: 14
