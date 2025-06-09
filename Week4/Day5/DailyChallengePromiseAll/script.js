// Try with Paris and New York

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
            throw Error(`HTTP error! status: ${res.status}`)
        }
        const data = response.json();
        if (!data || Object.keys(data).length === 0) {
            console.log(`No data found for "${url}". Please try another category.`);
            return null;
        }
    } catch (error) {
        console.log("An error has occured: \n" + error)   
    }
}