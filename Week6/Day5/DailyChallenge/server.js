import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { emojis } from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const leaderboard = [];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

dotenv.config();
const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/', express.static(__dirname + '/public'));
/** body-parser with JSON */
app.use(express.json());

/** (c)R(ud) - GET /question - provide new question for users */
app.get('/question', (req, res) => {
    if (emojis.length < 4) {
        return res.status(500).json({ error: 'Not enough emojis to generate question' });
    };

    const correctAnswerElementIndex = Math.floor(Math.random() * emojis.length);
    const correctEmojiObj = emojis[correctAnswerElementIndex];
    const correctAnswerEmoji = correctEmojiObj.emoji;
    const correctAnswerName = correctEmojiObj.name;

    let options = [];
    options.push(correctAnswerName);
    let count = 0;
    do {
        let rndElementIndex = Math.floor(Math.random() * emojis.length);
        let name = emojis[rndElementIndex].name;
        if (rndElementIndex != correctAnswerElementIndex && !options.includes(name)) {
            options.push(emojis[rndElementIndex].name);
            count++;
        }
    } while (count < 3);

    options = shuffleArray(options);
    req.session.correctAnswer = correctAnswerName;
    res.json({ emoji: correctAnswerEmoji, options });
});

/** C(rud) - POST /submit - create answer attempt, check correctness */
app.post('/submit', (req, res) => {
    if (req.body === undefined || !('answer' in req.body)) {
        return res.status(400).send({ error: "Request should contain 'answer' field." });
    };

    if (!req.session.correctAnswer) {
        return res.status(400).send({ error: "No active question in session." });
    };

    const correctAnswer = req.session.correctAnswer;
    const userAnswer = req.body.answer;
    console.log(req.body);

    if (userAnswer === correctAnswer) {
        req.session.score = (req.session.score || 0) + 1;
        res.send({ result: 'correct', score: req.session.score });
    } else {
        res.send({ result: 'incorrect', score: req.session.score });
    };
});

/** C(rud) - POST /submit-name - save player's name and score to the leaderboard */
app.post('/submit-name', (req, res) => {
    console.log(req.body);
    if (req.body === undefined || !('playerName' in req.body)) {
        return res.status(400).send({ error: "Request should contain 'playerName' field." });
    };

    if (!req.session.score) {
        return res.status(400).send({ error: "There is no score in session." });
    };

    const playerName = req.body.playerName.trim();
    const playerScore = req.session.score;
    let player = leaderboard.find(p => p.name == playerName);

    if (player && player.score > playerScore) {
        return res.status(400).send({ error: "This name is already taken by a better score." });
    };

    if (player) {
        player.score = playerScore;
    } else {
        player = { name: playerName, score: playerScore };
        leaderboard.push(player);
    };
    leaderboard.sort((a, b) => b.score - a.score);
    req.session.score = 0;
    res.json({ message: "Score saved", name: playerName, score: playerScore });
    console.log({ message: "Score saved", name: playerName, score: playerScore });
});

/** (c)R(ud) - GET /leaderboard - return top-10 players */
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard.slice(0, 10));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});