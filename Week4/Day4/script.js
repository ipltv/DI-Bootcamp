// /** Async in JS */

// function getX(callback) {
//     setTimeout(() => {
//         callback(5);
//     }, 2 * 1000);
// }

// function getY(callback) {
//     setTimeout(() => {
//         callback(6);
//     }, 5 * 1000);
// }

// function getXY() {
//     getX((x) => {
//         console.log("x => ", x);
//         getY((y) => {
//             console.log("y => ", y);
//             console.log("x + y => ", x + y);
//         });
//     })
// }

// // getXY();

// // /** Callback */

// // function myCallback() {
// //     console.log("my callback executed!!!");
// // }

// // function execCallback(func) {
// //     func();
// // }

// // execCallback(getXY);

// /** Make tea */

// /** takes 5 sec */
// function boilWater(callbackWater) {
//     console.log("Boiling water...");
//     setTimeout(() => {
//         callbackWater("hot water")
//     }, 5000)
// }

// /** takes 2 sec */
// function getTeaBag(callbackTea) {
//     console.log("Getting a teabag...");
//     setTimeout(() => {
//         callbackTea("green tea");
//     }, 2000)
// }

// /**take 1 sec */
// function makeTea(water, tea, callbackMakeTea) {
//     console.log("Making a nice cup of a tea...");
//     setTimeout(() => {
//         callbackMakeTea( `A nice cup of ${tea} with ${water}`);
//     }, 1000)
// }

// function prepareTea() {
//         boilWater((water) => {
//             console.log("water => ", water);
//             getTeaBag((tea) =>{
//                 console.log("tea => ", tea);4
//                 makeTea(water,tea, (make) => {
//                     console.log(make)});
//                 })
//         });
// }

// // prepareTea();

// /** Promises (ES6) / Async Await (ES8) */

// let promise1 = new Promise((resolve, reject) => {
//     resolve("hot water");
// });

// console.log("promise => ", promise1);

// promise1.then(a => {return "wow" + a})
// .then(e => console.log(e))
// .catch(b => console.log(b));


// let p = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res(5)
//     }, 5 * 1000)
// });

// // console.log(p);

// // p.then(val => {
// // console.log(val)
// // }).catch(e => console.log(e));

// function getMyX(){
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(6)
//         }, 5 * 1000)
//     })
// }


// function getMyY(){
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(5)
//         }, 2 * 1000)
//     })
// }

// function getMyXY(){
//     getMyX().then((x) => {
//         console.log("x => ", x);

//         getMyY().then((y) => {
//             console.log("y=> ", y);
//             console.log("x + y =>", x + y);
//         })
//         .catch((e) => {
//             console.log(e);
//         })
//     })
// }

// // getMyXY();

// const flip = () => {
//     const coin = Math.floor(Math.random() * 2);
//     return coin === 0 ? "head" : "tail";
// };

// const flipcoin = new Promise((res, rej) => {
//     setTimeout(() => {
//         const result = flip();
//         if(result === "head"){
//             res("You win => " + result)
//         }
//         else(
//             rej("You lose => " + result)
//         )
//     }, 3 * 1000)
// })

// // flipcoin.then(res => console.log(res)).catch((res) => console.log(res));

// /** Promise.resolve, Promise.reject */

console.log(Promise.resolve(5));

function _getX(){
    return Promise.resolve(5);
}

_getX().then((val) => console.log(val));

// Promise.all();
// Promise.allSettled();
// Promise.race();
// Promise.any();

const p1 = Promise.resolve("resolve promise 1");
const p2 = Promise.resolve("resolve promise 2");
const p3 = Promise.resolve("resolve promise 3");

let arrayOfPromises = [p1, p2, p3];
console.log(arrayOfPromises);

Promise.all(arrayOfPromises).then(res => console.log(res));
