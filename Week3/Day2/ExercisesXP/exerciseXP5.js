//Exercise 5 : Users
console.log("--------Exercise 5--------")

const div = document.getElementsByTagName("div").item(0)

const uls = document.getElementsByTagName("ul")
const secondUl = uls.item(1);
const liToRemove = secondUl?.getElementsByTagName("li").item(1);
if (liToRemove) liToRemove.remove();

for (let ul of uls) {
    ul.getElementsByTagName("li").item(0).innerText = "Ilya"
    ul.classList.add("student_list")
}
uls.item(0).classList.add("university", "attendance")

div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

const listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
    if (li.textContent.trim() === "Dan") {
        li.style.display = "none";
    }
});

listItems.forEach(li => {
    if (li.textContent.trim() === "Richard") {
        li.style.border = "2px solid black";
    }
});

document.body.style.fontSize = "20px";

if (div.style.backgroundColor === "lightblue") {
    const firstUl = document.querySelectorAll("ul")[0];
    const liElements = firstUl.querySelectorAll("li");
    const user1 = liElements[0]?.textContent.trim();
    const user2 = liElements[1]?.textContent.trim();
    alert(`Hello ${user1} and ${user2}`);
}
