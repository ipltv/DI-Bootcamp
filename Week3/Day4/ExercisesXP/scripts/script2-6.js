//Exercise 2 : Ternary operator
let winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);  // ➜ 10

//Exercise 3 : Is it a string ?

const isString = (value) => (typeof value === 'string' || value instanceof String);

console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find the sum
const sum = (value1, value2) => value1 + value2;

console.log(sum(1, 2));

//Exercise 5 : Kg and grams
function kgToGrammFunctDecl(value) {
    if (isNaN(value)) return -1;
    return value * 1000;
}
console.log(kgToGrammFunctDecl(5));
const kgToGrammFunctExpr = function (value) {
    if (isNaN(value)) return -1;
    return value * 1000;
}
console.log(kgToGrammFunctExpr("sadqd"))
// Function declarations are hoisted and can be called before they are defined, while function expressions are not hoisted.
const kgToGrams = kg => kg * 1000;
console.log(kgToGrams (10));

// Exercise 6 : Fortune teller
(function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    let p = document.createElement("p");
    p.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
    document.body.appendChild(p);
})(1, "Nils", "Alabama", "Farmer")
