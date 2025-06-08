const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// expected output: Array [3, 42, "foo"]
// Answer: Promise.all waits for all to resolve.
// It returns results in order.
// If any promise fails, it rejects.

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
// expected output: Array [2, 4, 6]
// timesTwoAsync returns a promise for x * 2.
// map creates array of promises.
// Promise.all returns their results.