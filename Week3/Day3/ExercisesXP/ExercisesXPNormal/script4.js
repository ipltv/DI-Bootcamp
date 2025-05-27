function calculateVolume(radius) {
    return (4 / 3 * Math.PI * Math.pow(radius, 3)).toFixed(2);
}

const form = document.forms[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let radius = parseFloat(e.target.radius.value);
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
    }
    e.target.volume.value = calculateVolume(radius)
})