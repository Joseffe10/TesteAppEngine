const express = require('express');

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Olá Whirlpool! App Engine Service!');
});

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});