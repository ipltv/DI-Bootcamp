import fs from 'fs'

console.log("Before");

// try {
//     const data = fs.readFileSync("main.js", "utf-8");
//     console.log(data);
    
// } catch (e) {
//     console.log(e.message);
// }

// fs.readFile('users', 'utf-8', (err, data) =>{
//     if (err)
//     {
//         console.log((err.message));
//     }
//     console.log(data);
    
// });

const users = [
    {name: "Nils"},
    {name: "Vesta"}
];

// fs.writeFile('user.json', JSON.stringify(users), 'utf-8', (err) => {
//     console.log(err);
// });

// fs.appendFile('users', '\nMarry', "utf-8", (err) => {
//     console.log(err);
    
// });



console.log("after");

