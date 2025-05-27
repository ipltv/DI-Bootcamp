const planets = [
    { name: "Mercury", colorClass: "mercury-color", moons: 0 },
    { name: "Venus", colorClass: "venus-color", moons: 0 },
    { name: "Earth", colorClass: "earth-color", moons: 1 },
    { name: "Mars", colorClass: "mars-color", moons: 2 },
    { name: "Jupiter", colorClass: "jupiter-color", moons: 3 },
    { name: "Saturn", colorClass: "saturn-color", moons: 4 },
    { name: "Uranus", colorClass: "uranus-color", moons: 2 },
    { name: "Neptune", colorClass: "neptune-color", moons: 1 }
];


let section = document.querySelector("body section.listPlanets");

planets.forEach(planetObj => {
    let div = document.createElement("div");
    div.classList.add("planet", planetObj.colorClass);
    div.textContent = planetObj.name;
    for (let i = 0; i < planetObj.moons; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        const angle = (i / planetObj.moons) * 2 * Math.PI;
        const radius = 60 + Math.random() * 20;
        moon.style.left = `${50 + Math.cos(angle) * radius}px`;
        moon.style.top = `${50 + Math.sin(angle) * radius}px`;

        div.appendChild(moon);
    }
    section.appendChild(div);
})