const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

// POST- criando novo usuário
app.post('/users', (req, res) => {
  const { cpf, nome, data_nascimento } = req.body;
  const newUser = { cpf, nome, data_nascimento };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET- obtendo usuários
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/', (req, res) => {
  res.send("Bem-vindo a API, é pouco mas é trabalho humilde")
})

// Serivdor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}/ \nDados nahttp://localhost:${port}/users `);
});

