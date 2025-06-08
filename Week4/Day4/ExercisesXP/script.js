// 🌟 Exercise 1 : Comparison

function compareToTen(num) {
    return num <= 10 ? new Promise((resolve, reject) => resolve(`Resolved => ${num} less or equal 10`)) : new Promise((resolve, reject) => reject(`Rejected => ${num} is greater than 10`));
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

//  Exercise 2 : Promises
const successfulPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000)
})

successfulPromise.then(res => console.log(res));

//  Exercise 3 : Resolve & Reject

const X = Promise.resolve(3);
const Y = Promise.reject("Boo");

X.then(res => console.log(res));
Y.catch(res => console.log(res));

