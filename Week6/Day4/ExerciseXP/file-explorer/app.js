// Exercise 3: File Management using CommonJS syntax

const {readFile, writeFile} = require("./fileManager.js");

console.log(readFile("Hello World.txt"));
writeFile("Bye World.txt","Writing to the file");