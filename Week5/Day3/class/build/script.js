"use strict";
/**
 * Create a function with 2 parameters
 * - number and an aliase of a string and number
 * return a string or a number as sum or concat;
 */
function advancedSum(a, b) {
    if (typeof b === "number") {
        return a + b;
    }
    else
        return a + b + "";
}
console.log(advancedSum(4, "5"));
console.log(advancedSum(5, 4));
let span = document.querySelector("span#year");
console.log(span);
const date = new Date();
span.innerText = " © " + date.getFullYear();
