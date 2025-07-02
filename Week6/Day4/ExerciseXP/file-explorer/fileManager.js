// Exercise 3: File Management using CommonJS syntax
const fs = require("fs");
function readFile(path){
    return fs.readFileSync(path, "utf-8");
};
function writeFile(path,data){
    fs.writeFileSync(path,data,"utf-8");
};

module.exports = {readFile, writeFile};