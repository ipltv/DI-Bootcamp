// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 
// Answer: It will raise a TypeError because a is declared as const, and reassignment (a = 3) is not allowed for constants.


//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer: It will raise a TypeError because a is declared as a const, and reassignment (a = 5) is not allowed for constant variables.
// The variable a is defined in the global scope, so the reassignment attempt inside funcTwo() affects it directly.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// Answer: It displays "inside the funcFive function hello" because funcFour() assigns the value to the global variable a via the window object.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer:  It will work the same way because we declare a new variable a in the local scope of the funcSix() function.
// Using const instead of let is valid here since the variable is not reassigned after declaration.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Answer: It will work the same way because a new variable a is declared inside the block scope of the if statement.
// Using const instead of let is valid here, as long as the variable is not reassigned.
