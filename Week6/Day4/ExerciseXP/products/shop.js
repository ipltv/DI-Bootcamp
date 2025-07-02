// Exercise 1: Multiple Exports and Import using CommonJS syntax
const products = require("./products.js");

function getProduct(name){
    for(const item of products){
        if (item.name == name){
            return item;
        }
    }
    return undefined;
};


console.log(getProduct("Apple"));
console.log(getProduct("iPhone 16 PRO MAX 1TB GOLD"));
console.log(getProduct("Orange"));
console.log(getProduct("Cat"));