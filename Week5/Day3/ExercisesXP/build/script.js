"use strict";
// Exercise 1: Class with Access Modifiers
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `-- Employee info --\nName: ${this.name}\nPosition: ${this.position}`;
    }
}
// Create an instance of the Employee class
const employee = new Employee("Alice Johnson", 75000, "Software Engineer", "IT");
// Call the getEmployeeInfo method and log the result
console.log(employee.getEmployeeInfo());
// Exercise 2: Readonly Properties in a Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `-- Product info --\nName: ${this.name}\nPrice: ${this.price}`;
    }
}
const milkProduct = new Product(0, "Milk Tnuva", 7.15);
console.log(milkProduct.getProductInfo());
// This line triggers a compile-time error:
// milkProduct.id = 1;
// Exercise 3: Class Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "This is animal sound.";
    }
}
class Dog extends Animal {
    makeSound() {
        return `${this.name} is barking...`;
    }
}
const jhon = new Dog("Jhon");
console.log(jhon.makeSound());
//  Exercise 4: Static Properties and Methods
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(Calculator.add(4, 5));
console.log(Calculator.subtract(4, 5));
function printUserDetails(user) {
    console.log(`--Premium User Detail--\nID: ${user.id}\nName: ${user.name}\nEmail: ${user.email}\nMembership Level: ${user.membershipLevel}`);
}
const premium1 = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};
const premium2 = {
    id: 102,
    name: "Bob",
    email: "bob@example.com"
};
printUserDetails(premium1);
printUserDetails(premium2);
