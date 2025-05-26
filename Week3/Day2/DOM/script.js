/** walking through the DOM */

/** id */
// const root = document.getElementById("root")

// console.log(root);
// root.style.backgroundColor = "yellow"
// root.textContent = "THE DOM TREE"


// const header2 = document.getElementById("header2")
// console.log(header2)
// header2.textContent = "Welcome to DOM"

/** tag name */
// const divs = document.getElementsByTagName("div");
// console.log(divs)

/** class name */
// const h2css = document.getElementsByClassName("divcss")
// console.log(h2css);

// const body = document.body
// console.log(body);

// const _root = document.querySelector("#root");
// console.log(_root);

// const _div = document.querySelector("h2#header2")

// const _divs = document.querySelectorAll("div.divcss")
// console.log(_divs)

// const myPtag = document.createElement("p");
// myPtag.innerText = "lorom epsum dolor sit "

// const myMainDiv = document.getElementById("main");
// myMainDiv.appendChild(myPtag);

function getUserParagrph(user){
    let pTag = document.createElement("p");
    pTag.classList.add("box");
    pTag.innerText = `User ID: ${user["id"]}; Name: ${user["name"]}; Email: ${user["email"]}`
    return pTag
}

function displayUsers(users){
    const root = document.getElementById("root")
    for (user in users){
        root.appendChild(getUserParagrph(users[user]))
    }
}


let users = [
    {id:1, name: "John", email: "jjjj@gmail.com"},
    {id:2, name: "Mary", email: "mmm@gmail.com"},
    {id:3, name: "Anne", email: "aaa@gmail.com"}
]

displayUsers(users)



