const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

/** body-parser with JSON */
app.use(express.json());

app.use(bookRoutes);

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
});