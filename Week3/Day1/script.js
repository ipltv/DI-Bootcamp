// var username;
// username = "Jhon"
// console.log(username);

// let x = 10;
// console.log(x);
// x = 11
// console.log(x);

// const COLOR = "red"
// // COLOR = "yellow"

// let a = 3, b = a, c = 2

// // x can be number string or boolean
// /*
//     x 
//     is 
//     a 
//     number
// */

// /*String */

// let str = "String"
// let str1 = 'Str'
// let str2 = `backtik is
// sadiojqod
// adsijq is
// `

// let strs = str + "\n " + str1

// console.log(strs);
// console.log(str2);

// /* length */
// let len = str2.length
// console.log(len);

// /** indexOf / lastIndexOf*/
// let indx = str2.indexOf('is')
// console.log(indx);

// let indx2 = str2.lastIndexOf('is')
// console.log(indx2);

// /** toLowerCase / toUpperCase */
// console.log(str.toUpperCase())


// /** Numbers */
// let num1 = 5;
// let num2 = 5;

// let sum = num1 + num2
// console.log(sum);

// console.log(1/0)

// console.log(5 + parseFloat("5"))

// num1.toString()

// /** Boolean */
// // true / >0
// // false / 0

// let bol = true
// const ISSAFE = false

// /** Null */

// let nu = null;

// /** Comparison */

// /**
//  * =
//  * ==
//  * ===
//  * !=
//  * !==
//  * >
//  * <
//  * >=
//  * <=
//  */
// console.log(5 == "5"); //true
// console.log(5 === "5"); //false

// console.log(5 != "5"); //false
// console.log(5 !== "5"); //true

// /**
//  * !
//  * &&
//  * ||
//  */

// console.log(!true)
// console.log(!!"abc")

// /** Operator */

// /**
//  * ++x
//  * x++
//  * --x
//  * x--
//  * x += 1
//  */

// let x1 = 0;
// ++x1
// x1 += 1;
// x1 += 5;
// console.log(x1)

// b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

//  console.log(tree);

// //  const tree = ++d * d*b * b++ + --d+ + +b-- + +d*b+ +  u
// console.log(4*4*3*3+3+4+3*3+3)

// /** user interface function */
// // alert("hello")
// // str = prompt("What is your age?")

// // console.log(Number(str) + 1);


// // let yesno = confirm("Are you going to the party?")

// // console.log(yesno)

// /** Array */

// let arr = [1, "a", "b", "abc", true]
// // arr[0] = 1
// // arr[1] = "a";
// let arr1 = new Array();
// arr1[0] = "b";
// arr1[1] = "c";
// console.log(arr, arr1);

// // console.log(arr[3])

// console.log(arr.length);

// arr.push("123")
// arr.pop()
// console.log(arr)

// /** unshift / shift */
// // arr.unshift('bla')
// let a1 = arr.shift()
// console.log(arr, a1);

// console.log(arr.toString());

// /** Join */

// console.log(arr.join("/"));

// /** Slice */
// let fruits = ["banana", "orange", "kiwi", "mango"]
// let arr2 = fruits.slice(1, 3)

// console.log(fruits)
// console.log(arr2)

/** splice */
// let arr3 = fruits.splice(1, 2)
// console.log(fruits)
// console.log(arr3)

/** Object */

// let obj = {
//     name: "John",
//     age: 25,
//     grades: [90,88,75],
//     address:{
//         city: "Tel Aviv"
//     }
// }
// let obj1 = new Object();

// obj.name = "Anne"
// console.log(obj.age)
// console.log(obj["name"])

// console.log(obj.grades);
// console.log(obj.address.city);

// let arr4 = [1,2, [3,[5],8],10]
// console.log(arr4[2][1][0]);

/** Conditions */

/**
 * if
 * else if
 * else
 * 
 * switch
 */

let a = 5
let b = 5
if (a === b) {
    console.log("a equals b");
}
else if (b > a) {
    console.log("b greather than a")
}
else {
    console.log("not a true condition")
}

let page = "homepage"
switch (page) {
    case "homepage":
        console.log("home");
        break;
    case "aboutpage":
        console.log("about")
        break;
    default:
        console.log("404")
        break;
}
    