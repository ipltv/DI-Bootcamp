// Implementation: Daily Challenge : Trivia Quiz Game
//Backend-part

//This is models/questionsModel.js
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answer: "Carbon dioxide",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "Seven",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answer: "100",
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    question: "In which ocean is the Bermuda Triangle located?",
    answer: "Atlantic Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
  },
  {
    question: "What is the smallest prime number?",
    answer: "2",
  },
  {
    question: "Which language has the most native speakers worldwide?",
    answer: "Mandarin Chinese",
  },
  {
    question: "Who was the first person to walk on the Moon?",
    answer: "Neil Armstrong",
  },
];

module.exports = triviaQuestions;

//This is controllers/questionController.js
const triviaQuestions = require('../models/questionsModel.js');

function getRandomQuestion() {
    return triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
};

const start = (req, res) => {
    const question = getRandomQuestion();
    console.log(question);
    req.session.rightAnswer = question.answer;
    res.json({ question: question.question });
};

const submit = (req, res) => {
    const { answer } = req.body;
    req.session.userScore = req.session.userScore || 0;

    if (typeof answer === 'string' &&
        typeof req.session.rightAnswer === 'string' &&
        answer.toLowerCase() === req.session.rightAnswer.toLowerCase()) {
        req.session.userScore++;
        res.json({ result: "correct", userScore: req.session.userScore });
    } else {
        res.json({ result: "incorrect", userScore: req.session.userScore });
    };
};

const getScore = (req, res) => {
    return res.json({ userScore: req.session.userScore || 0 });
};

module.exports = {
    start,
    submit,
    getScore
};

//This is routes/questionRouter.js
const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router();

router.get("/quiz", questionController.start);
router.post("/quiz", questionController.submit);
router.get("/quiz/score", questionController.getScore);

module.exports = router;

//This is app.js (server)
const express = require("express")
const session = require("express-session");
require('dotenv').config();
const questionRouter = require("./routes/questionRouter.js");

const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
/** body-parser with JSON */
app.use(express.json());
app.use(questionRouter);

app.use('/', express.static(__dirname + '/public'));

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
});

//Frontend-part
//This is index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Trivia Quiz</title>
</head>
<body>
  <h1>Trivia Game</h1>
  <div id="question-container">
    <p id="question">Loading question...</p>
    <input type="text" id="answer" placeholder="Your answer" />
    <button onclick="submitAnswer()">Submit</button>
  </div>
  <p id="result"></p>
  <p>Score: <span id="score">0</span></p>
  <button onclick="loadQuestion()">Next Question</button>

  <script>
    async function loadQuestion() {
      const res = await fetch('/quiz');
      const data = await res.json();
      document.getElementById('question').textContent = data.question;
      document.getElementById('answer').value = '';
      document.getElementById('result').textContent = '';
    }

    async function submitAnswer() {
      const answer = document.getElementById('answer').value;

      const res = await fetch('/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answer })
      });

      const data = await res.json();
      document.getElementById('result').textContent = data.result === 'correct' ? '✅ Correct!' : '❌ Incorrect.';
      document.getElementById('score').textContent = data.userScore;
    }

    loadQuestion(); 
  </script>
</body>
</html>
