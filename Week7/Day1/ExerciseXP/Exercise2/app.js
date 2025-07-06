const express = require('express');
const toDoRoutes = require('./routes/todos.js');
const app = express();
/** body-parser with JSON */
app.use(express.json());

app.use(toDoRoutes);

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
})