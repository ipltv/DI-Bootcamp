/**
 * Create a function with 2 parameters
 * - number and an aliase of a string and number
 * return a string or a number as sum or concat;
 */

type stringOrNumber = string | number;

function advancedSum(a: number, b: stringOrNumber):stringOrNumber{
    if (typeof b === "number"){
        return a + b;
    }
    else return a + b + ""
}

console.log(advancedSum(4, "5"));
console.log(advancedSum(5, 4));

let span = document.querySelector("span#year") as HTMLSpanElement;
console.log(span);
const date = new Date();
span.innerText = " © " + date.getFullYear();
