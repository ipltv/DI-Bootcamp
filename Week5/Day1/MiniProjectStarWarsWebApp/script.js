function getRandomURL(){
    return `https://www.swapi.tech/api/people/${Math.floor(Math.random() * 83) + 1}`;
}

async function swapi() {
    try{
        const response = await fetch(getRandomURL());
        if (!response.ok) {
            throw new Error("Request is not succsessful.");
        }
        let data = await response.json()
        return data;
    } catch(error){
        console.error(error);
    }
}

swapi().then(res => console.log(res));