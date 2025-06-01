colors = [
    "red",
    "orangered",
    "orange",
    "yellow",
    "yellowgreen",
    "lightgreen",
    "green",
    "turquoise",
    "cyan",
    "lightskyblue",
    "dodgerblue",
    "blue",
    "darkblue",
    "indigo",
    "darkmagenta",
    "violet",
    "lightpink",
    "lightgray",
    "gray",
    "black",
    "white"
]

const sideBarDiv = document.getElementById("sidebar");
const fieldDiv = document.getElementById("field");
const clearButton = document.getElementsByTagName("button")[0];
let chosenColor = "white";
let isMouseDown = false;

function paintCell(e) {
    e.target.style.backgroundColor = chosenColor;
}


function generatePallet() {
    for (let i = 0; i < colors.length; i++) {
        let palleteElement = document.createElement("div");
        palleteElement.style.backgroundColor = colors[i];
        sideBarDiv.appendChild(palleteElement);
        palleteElement.addEventListener("click", (e) => {
            chosenColor = e.target.style.backgroundColor;
            for (let child of sideBarDiv.children) {
                child.style.border = "1px solid black";
            }
            e.target.style.border = "3px solid deeppink";
        })
    }
}

function generateField() {
    for (let i = 0; i < 1440; i++) {
        let gridElement = document.createElement("div");
        fieldDiv.appendChild(gridElement);

        gridElement.addEventListener("mousedown", (e) => {
            isMouseDown = true;
            paintCell(e);
        })

        gridElement.addEventListener("mouseover", (e) => {
            if (isMouseDown) paintCell(e);
        })
    }
}


document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

clearButton.addEventListener("click", () => {
    for (let cell of fieldDiv.children) {
        cell.style.backgroundColor = "white";
    }
})

generatePallet();
generateField();