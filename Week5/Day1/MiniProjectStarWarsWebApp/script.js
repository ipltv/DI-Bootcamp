function getRandomCharacterURL() {
    return `https://www.swapi.tech/api/people/${Math.floor(Math.random() * 83) + 1}`;
}

async function swapi(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Request is not succsessful.");
        }
        let data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}

function displayLoadingFiller() {
    const iElement = document.createElement("i");
    iElement.classList.add("fa-solid", "fa-spinner", "fa-spin-pulse", "big-white-icon");

    const pElement = document.createElement("p");
    pElement.innerText = "Loading...";
    pElement.classList.add("loading-p");
    contentSection.replaceChildren(iElement, pElement);
}

function removeDisplayedData() {
    contentSection.replaceChildren();
}

function displayLoadedData(dataCharacter, dataHomeworld) {
    removeDisplayedData();
    const propertiesList = { "Height": "height", "Gender": "gender", "Birth Year": "birth_year" };

    const h2NameElement = document.createElement("h2");
    h2NameElement.innerText = dataCharacter.result.properties.name;
    contentSection.appendChild(h2NameElement);


    for (let property in propertiesList) {
        const pElement = document.createElement("p");
        pElement.innerText = property + ": " + dataCharacter.result.properties[propertiesList[property]];
        contentSection.appendChild(pElement);
    }

    const pHomeworldElement = document.createElement("p");
    pHomeworldElement.innerText = "Home World: " + dataHomeworld.result.properties.name;
    contentSection.appendChild(pHomeworldElement);
}

function displayErrorMessage() {
    removeDisplayedData();
    const h2ErrorElement = document.createElement("h2");
    h2ErrorElement.innerText = "Oh No! That person isnt available.";
    contentSection.appendChild(h2ErrorElement);
}

const contentSection = document.getElementById("content");
document.getElementById("findButton").addEventListener("click", async (e) => {
    e.target.disabled = true;
    displayLoadingFiller();
    try {
        const characterData = await swapi(getRandomCharacterURL());
        const homeworldData = await swapi(characterData.result.properties.homeworld);
        if (!characterData?.result?.properties || !homeworldData?.result?.properties) {
            throw new Error("Incomplete data received");
        }
        displayLoadedData(characterData, homeworldData);
    }
    catch (error) {
        console.log("An error has occured: ", error);
        displayErrorMessage();
    }
    e.target.disabled = false;
}
)