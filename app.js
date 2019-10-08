const express = require('express');
const app = express();
const alunos = [
    { nome: 'José'},
    { nome: 'Antonio'}
];

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.listen(3000, () => console.log('Servidor online na porta 3000'));