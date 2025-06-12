// Exercise 1: Class with Access Modifiers

class Employee{
    constructor(
        private name:string,
        private salary:number,
        public position:string,
        protected department:string
    ){

    }

    getEmployeeInfo():string{
        return `-- Employee info --\nName: ${this.name}\nPosition: ${this.position}`;
    }
}

// Create an instance of the Employee class
const employee = new Employee("Alice Johnson", 75000, "Software Engineer", "IT");

// Call the getEmployeeInfo method and log the result
console.log(employee.getEmployeeInfo());


// Exercise 2: Readonly Properties in a Class
 
class Product{
    readonly id:number;
    public name:string;
    public price:number;

    constructor(id: number, name:string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo():string{
        return `-- Product info --\nName: ${this.name}\nPrice: ${this.price}`;
    }
}

const milkProduct = new Product(0,"Milk Tnuva", 7.15);

console.log(milkProduct.getProductInfo());
// This line triggers a compile-time error:
// milkProduct.id = 1;

// Exercise 3: Class Inheritance

class Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    makeSound():string{
        return "This is animal sound."
    }
}

class Dog extends Animal{
    makeSound():string{
        return `${this.name} is barking...`;
    }
}

const jhon = new Dog("Jhon");
console.log(jhon.makeSound());


//  Exercise 4: Static Properties and Methods

class Calculator{
    static add(a: number, b: number): number{
        return a + b;
    }
    static subtract(a: number, b: number): number{
        return a - b;
    }
}

console.log(Calculator.add(4, 5));
console.log(Calculator.subtract(4, 5));

// Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User {
    readonly id: number,
    name: string,
    email: string
}

interface PremiumUser extends User{
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser):void{
    console.log(`--Premium User Detail--\nID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}\nMembership Level: ${user.membershipLevel}`)
}

const premium1: PremiumUser = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};

const premium2: PremiumUser = {
    id: 102,
    name: "Bob",
    email: "bob@example.com"
};

printUserDetails(premium1);
printUserDetails(premium2);
