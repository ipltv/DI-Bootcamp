const userInput = prompt("Please, input several words (separated by commas):");
const wordsArray = userInput.split(',').map(item => item.trim());


function displayStarBox() {
    const maxLength = wordsArray.reduce((max, currentValue) => max > currentValue.length ? max : currentValue.length, 0);
    console.log('*'.repeat(maxLength + 2));
    wordsArray.forEach(item => {
        console.log('*' + item + ' '.repeat(maxLength - item.length) + '*');
    });
    console.log('*'.repeat(maxLength + 2));
}

displayStarBox();