const express = require('express');
const pageRouter = require('./routes/pageRouter');
const path = require('path');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/pages'));

app.use(express.json());
app.use(pageRouter);

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});