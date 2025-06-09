// Exercise 1 : Giphy API
let API_KEY;

function getURL(query, startingPosition, rating, limit, API_KEY)
{
    return `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&offset=${startingPosition}&limit=${limit}&api_key=${API_KEY}`
}

async function loadKey() {
  try {
    const res = await fetch('./giphyAPI.txt');
    return await res.text();
  } catch (err) {
    console.error("Error loading API key:", err);
    throw err;
  }
}

async function retrieveData(query, startingPosition, rating, limit=50) {
  try {
    API_KEY = await loadKey();
 
    const endpoint = getURL(query, startingPosition, rating, limit, API_KEY);
    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched Giphy Data:", data);
    return data;
  } catch (err) {
    console.error("Error retrieving data:", err);
  }
}

let hilariousResultObj;
retrieveData("hilarious", 0, "g").then(data => {
  if (data) {
    hilariousResultObj = data;
  }
});

// Exercise 2 : Gaiphy API

let sunResultObj;
retrieveData("sun", 2, "r",10).then(data => {
  if (data) {
    sunResultObj = data;
  }
});

// Exercise 3 : Async function
async function swapi() {
    try{
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error("Request is not succsessful.");
        }
        let data = await response.json()
        console.log(data.result);
    } catch(error){
        console.error(error);
    }
}
swapi();

// Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//Expected outcome: Initialy asyncCall print "calling" to console, then it will output 'resolved' into conlose after 2 seconds. 