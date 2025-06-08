// 1st daily challenge
function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        if (array.every((x) => typeof x === "string" || x instanceof String))
            resolve(array.map(x => x.toUpperCase()))
        else reject("Not every item is a string.");
    })
}

function sortWords(array) {
    return new Promise((resolve, reject) => {
        if (array.length > 4) {
            resolve(array.sort())
        }
        else reject("Length of the array is less than 4.")
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))

// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(jsonString) {
    let jsonObject = JSON.parse(jsonString);
    return new Promise((resolve, reject) => {
        if (Object.keys(jsonObject).length > 0) {
            console.log(jsonObject);
            resolve(jsonObject);
        }
        else {
            console.log("JSON is empty.");
            reject("JSON is empty.");
        }
    })
}

function toMorse(jsonObject) {
    let userInput = prompt("Please input your message: ");
    return new Promise((resolve, reject) => {
        let encryptedInput = [];
        for (let symbol of userInput) {
            if (symbol.toLowerCase() in jsonObject) {
                encryptedInput.push(jsonObject[symbol.toLowerCase()]);
            } else if (symbol.toLowerCase() === " "){
                encryptedInput.push("");
            }
            else {
                reject(`Symbol "${symbol}" isn't supported.`);
                return;
            }
        }
        resolve(encryptedInput);
    })
}

function joinWords(morseTranslation) {
    let p = document.createElement("p");
    p.innerText = morseTranslation.join("\n");
    document.body.appendChild(p);
}

toJs(morse).then(toMorse).then(joinWords).catch(err => console.log("Error: ", err));