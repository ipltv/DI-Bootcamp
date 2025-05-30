const tasks = {};
let tasksCounter = 0;
let tasksDiv = document.querySelector("#listTasks");
const input = document.getElementById("newTaskTextField");
let form = document.forms.item(0);
let ul = document.querySelector("ul");

console.log(tasksDiv);
console.log(ul);

function doneTask(event) {
    const isChecked = event.target.checked;
    const taskId = event.target.dataset.taskId;
    tasks[taskId].done = isChecked;
    const label = document.querySelector(`label[for='${taskId}']`);
    if (label) {
        label.style.textDecoration = isChecked ? "line-through" : "";
        label.style.color = isChecked ? "#FF0101" : "black";
    }
}

    function deleteTask(li) {
        const checkbox = li.querySelector("input[type='checkbox']");
        const taskId = checkbox.dataset.taskId;
        delete tasks[taskId];
        li.remove();
    }

    function getRedCrossElement(li) {
        let i = document.createElement("i");
        i.classList.add("fa");
        i.classList.add("fa-close");
        i.style.color = "red";
        i.style.cursor = "pointer";
        i.addEventListener("click", () => {
            deleteTask(li);
        })
        return i;
    }

    function getLabel(inputValue, taskId) {
        let label = document.createElement("label");
        label.setAttribute("for", taskId);
        label.append(inputValue);
        return label;
    }

    function getCheckBox(taskId) {
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("data-task-id", taskId);
        checkBox.setAttribute("id", taskId);
        return checkBox;
    }

    function getLiElement(taskID) {
        let li = document.createElement("li");
        let redCross = getRedCrossElement(li);
        let checkBox = getCheckBox(taskID);
        let label = getLabel(tasks[taskID].textValue, taskID);
        li.appendChild(redCross);
        li.appendChild(checkBox);
        li.appendChild(label);
        checkBox.addEventListener("change", (e) => doneTask(e))
        return li;
    }

    function addTask() {
        let inputValue = document.getElementById("newTaskTextField").value.trim();
        if (!inputValue) return;
        tasks[tasksCounter] = { textValue: inputValue, done: false }
        ul.appendChild(getLiElement(tasksCounter));
        tasksCounter += 1;
        input.value = "";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask();
    });