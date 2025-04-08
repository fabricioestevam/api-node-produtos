const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const dados = [
  { id: 1, nome: 'Produto A', preco: 10 },
  { id: 2, nome: 'Produto B', preco: 20 },
  { id: 3, nome: 'Produto C', preco: 30 }
];

app.get('/produtos', (req, res) => {
  res.json(dados);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
