/** function */

function nameFunc(){
    /**
     * 
     * 
     */
    console.log("hello from function");
}
// nameFunc();

function logName(name, lastName){
    console.log(name, lastName);
}

// logName("Jhon", "Due");

function getFullName(first_name, last_name){
    // return first_name + " " + last_name;
    // return [first_name, last_name]
    return {
        name: first_name,
        last: last_name
    }
}

// let val = getFullName("John", "Due")
// console.log(val);

function sum(a = 1, b = 1){
    // if (b === undefined)
    // {
    //     b = 1
    // }
    return a + b
}

// let res = sum(undefined,5)
// console.log(res)

/** function declaration - hosting */
// let m = multi(5,5)
// console.log(m);
function multi(a , b){
    return a*b
}

/** function expression  */
const divide = function (a, b) {
    return a / b
}
console.log(divide(6,3));


/** ES6 - arrow function */
const minus = (a,b) => {
    return a - b
}

const _minus = (a,b) => a - b
const __minus = a => a + 5