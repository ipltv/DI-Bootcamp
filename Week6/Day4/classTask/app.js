// console.log("Welcome to NodeJS");
// //npm nodemon - like node --watch
// for(let i = 0; i<5; i++){
//     console.log(i);
// }
// //npm axios
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch((e) => console.log(e));


/** NodeJS Module System */
/**
 * 1. Module that you create.
 * 2. NPM - Node Package Manager.
 * 3. Core Module - FS, HTTP and more.
*/

// const { multi, divide, plus, minus } = require("./math/math.js"); CommoneJS
// import { multi, divide, plus, minus } from "./math/math.js"; //module

// const greeting = (name) => {
    //     return `Welcome, ${name} to NodeJS week!`;
    // }

// const hello = (name) => {
//     return `Hi ${name}`;
// }

// console.log(greeting("Jhon"));
// module.exports = { greeting, hello };


// console.log(multi(5, 5));
// console.log(divide(5, 5));
// console.log(plus(5, 5));
// console.log(minus(5, 5));

// const { default: axios } = require("axios");

// console.log(res.data);

import fetchData from "./data/fetchData.js"

console.log(await fetchData("https://jsonplaceholder.typicode.com/users"));

