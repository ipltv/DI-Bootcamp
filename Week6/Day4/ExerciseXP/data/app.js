// Exercise 2: Advanced Module Usage using ES6 module syntax
import {people} from "./data.js"

function avgAge(people){
    let sum = 0;
    for(const person of people){
        sum += person.age;
    }
    return sum > 0 ? sum / people.length : undefined;
}

console.log(avgAge(people));
