"use strict";
let num = 1;
num = 4;
/** type string */
let str;
str = 'abc';
/** type boolean */
let bol;
bol = true;
/** any - try not to use it much as possible*/
let a;
a = 0;
a = "a";
/** union type */
let myStrNum;
myStrNum = 0;
myStrNum = "asd";
myStrNum = true;
/** type array */
let arr = ["1", "2", "3"];
arr.push("100");
let arrStrNum = [];
arrStrNum[0] = 1;
arrStrNum.push("a");
// let arr1: myTuple = ["a", 2, false, "b"];
let arr2 = ["a", 2, "b", false];
//** type object */
let myObj = {};
myObj = [];
console.log(typeof []);
const user = {
    name: "Jhon",
    age: 25
};
// user.email = "jjj@gmail.com";
user.age = 26;
let url = "http...";
let url1 = "https...";
let userJhon = {
    name: "Jhon",
    age: 25
};
console.log(userJhon.gender);
userJhon.gender = 0;
let userMarry = {
    name: "Marry",
    age: 23,
    gender: "F"
};
let userDan = {
    name: "Dan",
    age: 22,
    gender: "M"
};
/** type Enum */
var Grade;
(function (Grade) {
    Grade["U"] = "60";
    Grade["D"] = "70";
    Grade["C"] = "80";
    Grade["B"] = "90";
    Grade["A"] = "100";
})(Grade || (Grade = {}));
console.log(Grade.A);
let statuscode;
statuscode = "failed";
let student1 = {
    name: "Trump",
    grade: Grade.U,
    gender: "other",
    status: "failed"
};
