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
