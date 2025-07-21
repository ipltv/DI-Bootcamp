import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {res.status(200).json({message: "Hello From Express"})})
app.post('/api/world', (req, res) => {
    const {message} = req.body;
    res.status(200).json({message: `I received your POST request. This is what you sent me: ${message}`});
    console.log(message);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

