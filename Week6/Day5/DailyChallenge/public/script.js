const SERVER_URL = "http://localhost:3000";
const OPTIONS_COUNT = 4;

const gameForm = document.getElementById("gameForm");
const questionParagraph = document.getElementById("questionParagraph");
const optionLabels = [
    document.getElementById('opt1Label'),
    document.getElementById('opt2Label'),
    document.getElementById('opt3Label'),
    document.getElementById('opt4Label')
];

const optionRadios = [
    document.getElementById('opt1'),
    document.getElementById('opt2'),
    document.getElementById('opt3'),
    document.getElementById('opt4')
];
const scoreSpan = document.getElementById('score');
const submitPlayerNameBtn = document.getElementById('submitNameBtn');

function startGame(URL) {
    const result = fetch(URL + '/question');
    result
        .then(response => {
            if (!response.ok) { // Check if the response status is not in the 200-299 range
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayQuestion(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

function displayQuestion(questionData) {
    if (!('emoji' in questionData) || !('options' in questionData) || questionData.options.length != OPTIONS_COUNT) {
        throw new Error(`Invalid data! Server returned bad question data.`);
    };

    clearInput();
    questionParagraph.innerText = "How is this emoji called? " + questionData.emoji;

    for (let i = 0; i < optionLabels.length; i++) {
        optionLabels[i].innerText = questionData.options[i];
    };
};

function updateScore(newScore) {
    scoreSpan.innerText = newScore;
};

function clearInput() {
    gameForm.reset();
};

async function submitPlayerName(playerName) {
    try {
        const response = await fetch(SERVER_URL + '/submit-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ playerName })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        showMessage(`${playerName}, your result: ${data.score} has been successfully submitted.`, "success");
        updateScore(0);
    } catch (error) {
        console.error('Error submitting name:', error);
    }
};

async function checkAnswer(URL) {
    let userAnswer;

    for (let i = 0; i < optionRadios.length; i++) {
        if (optionRadios[i].checked) {
            userAnswer = optionLabels[i].innerText;
            break;
        }
    }

    if (!userAnswer) {
        showMessage("Please select an option before submitting!", "error");
        return;
    }

    try {
        const response = await fetch(URL + '/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer: userAnswer })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);

        if (data.result === 'correct') {
            showMessage("You won!", "success");
            updateScore(data.score);
            startGame(SERVER_URL);
        } else {
            showMessage("It's wrong! Try one more time!", "error");
        }
    } catch (error) {
        console.error('Error submitting answer:', error);
    }
};

function showMessage(message, type = 'success') {
    const msgBox = document.getElementById('messageBox');
    msgBox.innerText = message;

    msgBox.classList.remove('hidden', 'success', 'error');
    msgBox.classList.add(type);
    msgBox.style.opacity = '1';
    msgBox.style.pointerEvents = 'auto';

    setTimeout(() => {
        msgBox.style.opacity = '0';
        msgBox.style.pointerEvents = 'none';
    }, 3000);
};

gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAnswer(SERVER_URL);
});

submitPlayerNameBtn.addEventListener('click', (e) => {
    const playerName = document.getElementById('playerNameInput').value.trim();
    if (playerName) {
        submitPlayerName(playerName);
    };
});

updateScore(0);
startGame(SERVER_URL);