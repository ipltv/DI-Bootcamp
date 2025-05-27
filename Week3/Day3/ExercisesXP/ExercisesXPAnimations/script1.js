// Exercise 1: Timer

const divContainer = document.getElementById("container");

function addPtoDiv(divContainer){
    let newP = document.createElement("p");
    newP.innerText = "Hello World";
    divContainer.appendChild(newP)
}

setTimeout(() => {alert("Hello World")},
2000)

setTimeout(() => addPtoDiv(divContainer),2000)

const intervalID = setInterval(() => {
    addPtoDiv(divContainer);
    let numberOfChildren = divContainer.getElementsByTagName("p").length;
    if (numberOfChildren === 5){
        clearInterval(intervalID);
    }
}, 2000, divContainer)

const btn = document.getElementById("clear");
btn.addEventListener("click", () => {
    clearInterval(intervalID);
})