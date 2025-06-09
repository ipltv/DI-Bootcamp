// // Exercise 1 : Giphy API
// let API_KEY;

// function getURL(query, startingPosition, rating, limit, API_KEY)
// {
//     return `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&offset=${startingPosition}&limit=${limit}&api_key=${API_KEY}`
// }

// async function loadKey() {
//   try {
//     const res = await fetch('./giphyAPI.txt');
//     return await res.text();
//   } catch (err) {
//     console.error("Error loading API key:", err);
//     throw err;
//   }
// }

// async function retrieveData(query, startingPosition, rating, limit=50) {
//   try {
//     API_KEY = await loadKey();
//     console.log("Loaded API_KEY:", API_KEY);

//     const endpoint = getURL(query, startingPosition, rating, limit, API_KEY);
//     const res = await fetch(endpoint);

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log("Fetched Giphy Data:", data);
//     return data;
//   } catch (err) {
//     console.error("Error retrieving data:", err);
//   }
// }

// let hilariousResultObj;
// retrieveData("hilarious", 0, "q").then(data => {
//   if (data) {
//     hilariousResultObj = data;
//   }
// });

// Exercise 2 : Giphy API

// let sunResultObj;
// retrieveData("sun", 0, "r",10).then(data => {
//   if (data) {
//     sunResultObj = data;
//   }
// });

// Exercise 3 : Async function
async function swapi() {
    let response = await fetch("https://www.swapi.tech/api/starships/9/");
    // .then(response => response.json())
    // .then(objectStarWars => console.log(objectStarWars.result));
    if (!response.ok) {
        throw new Error("Request is not succsessful.");
    }
    let data = await response.json()
    console.log(data.result);
}

swapi();

