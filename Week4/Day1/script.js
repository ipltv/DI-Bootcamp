// const string = "word in a given String";

// function reverseWord(word){
//     let resultString = "";
//     for (let i = word.length - 1; i >= 0; i--){
//         resultString += word[i];
//     }
//     return resultString;
// }

// function reverseSentence(string){
//     let reversedString = "";
//     const words = string.split(" ");
//     for (let i = 0; i < words.length; i++){
//         reversedString += reverseWord(words[i]) + " ";
//     }
//     return reversedString;
// }

// console.log(reverseSentence(string));



// const users = ["John", "Marry", "Dan", "Anne"];
// let emails = [];

// for (const x of users){
//     emails.push(x + "@gmail.com");
// }
// console.log(emails);

/** forEach */

// let emails2 = [];
// users.forEach((item) => {
//     emails2.push(item + "@gmail.com");
// })
// console.log(emails2);

// function multiplyByTwo(array){
//     resultArray = [];
//     array.forEach((item) => {
//         resultArray.push(item * 2);
//     })
//     return resultArray;
// }

// console.log(multiplyByTwo([1,2,3,4]));

let newUsers = [
  { id: 1, name: "John", email: "John@gmail.com" },
  { id: 2, name: "Marry", email: "Marry@gmail.com" },
  { id: 3, name: "Anne", email: "Anne@gmail.com" },
  { id: 4, name: "Or", email: "Or@gmail.com" },
];

// let aUsers = newUsers.filter((item) => {
//     return item.name.toLowerCase().includes("a");
// });

// console.log(aUsers);

// let rootDiv = document.getElementById("root");
// let table = document.createElement("table");

// function getRowElement(user) {
//     let row = document.createElement("tr");
//     for (let key in user) {
//         let td = document.createElement("td");
//         td.innerText = user[key];
//         row.appendChild(td);
//     }
//     return row;
// }

// let headerRow = document.createElement("tr");
// ["ID", "Name", "Email"].forEach(text => {
//     let th = document.createElement("th");
//     th.innerText = text;
//     headerRow.appendChild(th);
// });
// table.appendChild(headerRow);

// newUsers.forEach(user => {
//     table.appendChild(getRowElement(user));
// });

// rootDiv.appendChild(table);

// function arraySum(array){
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// console.log(arraySum([2,5,10,100]));

/** reduce */
let nums = [2,5,10,100];
let sum = nums.reduce((sum, item) => {
    return sum + item;
},10);

console.log(sum);