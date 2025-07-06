const express = require("express")
const productRouter = require("./routes/productRoutes.js");
const userRouter = require("./routes/usersRouter.js");

const app = express();
/** body-parser with JSON */
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/index.html"))
// })

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
})