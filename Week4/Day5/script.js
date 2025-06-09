// function getUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("John")
//     }, 2000);
//   });
// }

// async function case1() {
//   let x = await getUsername();
//   console.log(x)
// }

// case1().then(res => console.log(res));
// console.log("Nils is the best cat");

// let baseUrl = "https://users-18kl.onrender.com/userjson";

// document.forms[0].addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = e.target.elements.name.value;
//   let username = e.target.elements.username.value;
//   let email = e.target.elements.email.value;

//   const data = {name, username, email};
//   const objBody = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-type": "application/json; charset=UTF-8" }
//   }
//   fetch(baseUrl, objBody)
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       }
//       throw new Error("Network response was not ok");
//     })
//     .then(data => {
//       console.log(data);
//       let p = document.createElement("p");
//       p.innerText = JSON.stringify(data, null, 2);
//       document.body.appendChild(p);
//     })
//     .catch(e => console.log(e))
// })


// async function getUserData(){
//   try {
//     let url = "https://jsonplaceholder.typicode.com/users?id=1";
//     let result = await fetch(url);
//     let data = await result.json()
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData().then(data => console.log(data));

/**async in loops */

const timeout = (id) => {
  return new Promise((res) =>
  {
    setTimeout(() => {
      res(id + " Done");
    }, 2000);
  })
}

async function  callTimeout(params) {
  console.log("before, Done");

  for(const item of ["first", "second", "third"]){
    console.log(await timeout(item)); 
  }

  ["first", "second", "third"].forEach(async item => {
    console.log(await timeout(item));
  })
  console.log("after, Done")
}

callTimeout();