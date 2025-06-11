"use strict";
function validateUnionType(value, allowedTypes) {
    return allowedTypes.includes(typeof value);
}
// Tests
console.log(validateUnionType(42, ['number', 'string'])); // true
console.log(validateUnionType('hello', ['number', 'string'])); // true
console.log(validateUnionType(true, ['number', 'string'])); // false
console.log(validateUnionType(undefined, ['undefined'])); // true
console.log(validateUnionType(null, ['object'])); // true (typeof null === 'object')
console.log(validateUnionType(() => { }, ['function'])); // true
console.log(validateUnionType(Symbol(), ['symbol'])); // true
