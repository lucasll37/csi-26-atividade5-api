// app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors()); // Permitir requisições cross-origin

const PORT = 5000;

let cidades = [
    { id: 1, nome: "São Paulo", imagem: "/path/to/image1.jpg", descricao: "Alguma descrição sobre São Paulo." },
    { id: 2, nome: "Rio de Janeiro", imagem: "/path/to/image2.jpg", descricao: "Alguma descrição sobre Rio de Janeiro." },
    // ... adicione mais cidades conforme necessário
];

app.get('/cidades', (req, res) => {
    res.json(cidades.map(c => ({ id: c.id, nome: c.nome }))); // retorna apenas o id e o nome
});

app.get('/cidade/:id', (req, res) => {
    const cidade = cidades.find(c => c.id === parseInt(req.params.id));
    if (cidade) {
        res.json(cidade);
    } else {
        res.status(404).send('Cidade não encontrada.');
    }
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});