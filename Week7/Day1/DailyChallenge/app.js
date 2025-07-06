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
})