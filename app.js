const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('./index.html', { root: __dirname })
});
app.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('./about.html', { root: __dirname })
});
app.get('/contact-me', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('./contact-me.html', { root: __dirname })
});
app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('./404.html', { root: __dirname })
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))