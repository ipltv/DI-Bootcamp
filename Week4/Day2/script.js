// function birthdayCandles(arr){
//     let result = 0;
//     let max = arr[0];
//     arr.forEach(element => {
//         if (element === max){
//             result += 1;
//         } else if (element > max){
//             max = element;
//             result = 1;
//         }
//     });
//     return result
// }


// function birthdayCandles2(arr){
//     let max = Math.max(...arr);
//     let filtered = arr.filter( item => {
//         return item === max;
//     })
//     return filtered.length;
// }

// console.log(birthdayCandles([2,4,9,4,9,1,9]));
// console.log(birthdayCandles2([2,4,9,4,9,1,9]));

// function findIntersection(arr){
//     let numbers1 = arr[0].split(",").map(x => parseInt(x));
//     let numbers2 = arr[1].split(",").map(x => parseInt(x));
//     let result = numbers1.filter(item => {
//         return numbers2.includes(item);
//     })
//     return result;
// }
// console.log(findIntersection(["1,2,2,5,6,7", "2,2,5,7,8,15"]));


let user = {
    name: "John",
    email: "jjjj@gmail.com",
    age: 25
}

// console.log(user);
// let value = user["name"];
// let value1 = user.age;

// user.age = 35;
// user["email"] = "j@test.com";
// value1 = user.email;
// user.address = {city: "tel aviv"};

console.log(user);