const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernames = [];
gameInfo.forEach((item) => {usernames.push(item.username + "!")});
console.log(usernames);

const usernamesWithScoreBigger5 = [];
gameInfo.forEach((item) => { if (item.score > 5) usernamesWithScoreBigger5.push(item.username)});
console.log(usernamesWithScoreBigger5);

let sum = gameInfo.reduce((sum, item) => {return sum + item.score}, 0);
console.log(sum);