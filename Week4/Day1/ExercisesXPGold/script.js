// Exercise 1 : Analyzing the map method

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

//Output: [2, 4, 6];


// Exercise 2: Analyzing the reduce method

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

//Output: [1,2,0,1,2,3]

// Exercise 3 : Analyze this code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})

/**
 * Output:
 * 1 0
 * 2 1
 * 4 2
 * 5 3
 * 8 4
 * 9 5
 */

// Exercise 4 : Nested arrays

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray2 = [array[0][0], array[1][0], array[2][0], ...array[3][0], ...array[4][0]];
console.log(newArray2);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newArray3 = greeting.map(item => item.join(" "));
console.log(newArray3);

const newArray4 = greeting.map(item => item.join(" ")).join(" ");
console.log(newArray4);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const flat = trapped.flat(Infinity);
console.log(flat);
