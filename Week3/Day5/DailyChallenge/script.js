const tasks = [];
let tasksDiv = document.querySelector("#listTasks");
let form = document.forms.item(0);
let ul = document.querySelector("ul");

console.log(tasksDiv);
console.log(ul);

function getRedCrosElement(li) {
    let i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-close");
    i.style.color = "red";
    i.addEventListener("click", () => {
        li.remove();
    })
    return i;
}

function getLabel(inputValue, taskId){
    let label = document.createElement("label");
    label.setAttribute("for",taskId);
    label.append(inputValue); 
    return label;
}

function getCheckBox(inputValue, taskId){
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", taskId);
    return checkBox;
}

function getLiElement(inputValue, taskId) {
    let li = document.createElement("li");
    li.appendChild(getRedCrosElement(li));
    li.appendChild(getCheckBox(inputValue, taskId));
    li.appendChild(getLabel(inputValue,taskId));
    return li;
}

function addTask() {
    let inputValue = document.getElementById("newTaskTextField").value.trim();
    if (!inputValue) return;
    tasks.push(inputValue);
    let taskId = `userTask#${tasks.length}`
    ul.appendChild(getLiElement(inputValue, taskId));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});