// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

async function getWeatherData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        if (!data || Object.keys(data).length === 0) {
            console.log(`No data found for "${url}".`);
            return null;
        }
        return data;
    } catch (error) {
        console.log("An error has occured: \n" + error)   
    }
}

function getURL(latitude,longitude)
{
    return `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;
}

function displayData(array){
    root.replaceChildren();
    array.forEach((element, index) => {
        const p = document.createElement("p");
        p.innerText = `City ${index + 1} sunrise: ${element.results.sunrise}`;
        root.appendChild(p);
    });
}

const root = document.getElementById("root");
const form = document.getElementById("cityForm");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const lat1 = form.lat1.value;
    const lon1 = form.lon1.value;

    const lat2 = form.lat2.value;
    const lon2 = form.lon2.value;

    Promise.all([getWeatherData(getURL(lat1,lon1)), getWeatherData(getURL(lat2,lon2))]).then(values => displayData(values));
});