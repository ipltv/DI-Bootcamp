const animate = document.getElementById("animate");
const container = document.getElementById("container");
let intervalID;

function myMove() {
    if (intervalID) return; 
    animate.style.left = "0px";
    intervalID = setInterval(() => {
        let containerWidth = parseInt(container.offsetWidth);
        let currentLeft = parseInt(animate.style.left) || 0;
        let animateWidth = parseInt(animate.offsetWidth);
        if (currentLeft + animateWidth < containerWidth) animate.style.left = (currentLeft + 1) + "px";
        else 
        {
            clearInterval(intervalID);
            intervalID = null;
        }
    }, 1)
}