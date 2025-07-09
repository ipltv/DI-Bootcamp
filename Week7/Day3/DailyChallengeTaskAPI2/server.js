const express = require('express');
const userRouter = require('./routes/userRouter.js');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(userRouter);
app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login', 'login.html'));
});


//EJS initialization
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});