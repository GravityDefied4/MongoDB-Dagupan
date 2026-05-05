const express = require('express');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Move to next middleware/route
});

app.get('/', (req, res) => {
    res.send('Welcome to Route Handling!');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Viewing Product ID: ${productId}`);
});

app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    res.send(`Searching for: ${searchTerm}`);
});

app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});