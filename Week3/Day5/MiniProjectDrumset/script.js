const keys = [65,83,68,70,71,72,74,75,76];

const containerDiv = document.getElementById("container");

function showBacklight(code){
    const div = document.querySelector(`div[data-key="${code}"]`);
    div.classList.add("play");
    setTimeout(() => {div.classList.remove("play")}, 200);
}

function playSound(code) {
    const audioElement = document.querySelector(`audio[data-key="${code}`);
    showBacklight(code);
    audioElement.currentTime = 0;
    audioElement.play();
}

function addPlayListeners() {
    for (let div of containerDiv.children) {
        div.addEventListener("click", (e) => {
            let code = e.target.getAttribute("data-key");
            playSound(code);
        })
    }
}

window.addEventListener("keydown", (e) =>
{
    let code = e.keyCode;
    if (!keys.includes(code)) return;
    e.preventDefault();
    e.stopPropagation();
    playSound(code);
})

addPlayListeners();