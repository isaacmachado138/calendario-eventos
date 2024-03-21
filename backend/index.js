const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); //body parser para evitar erros ao receber body da requisicao
const cors = require('cors'); //cors para nao dar erro nas requisicoes

const db = require('./DB/connection.js'); //importando conexao

app.use(cors());
app.use(bodyParser.json());


// Defina o diretório de onde o frontend será servido
app.use(express.static(path.join(__dirname, '../frontend')));

// Defina suas rotas API aqui
app.post('/login', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    // Consulta SQL para verificar se o usuário existe
    const queryString = 'SELECT user_id, user_name FROM user WHERE user_email = ? AND user_password = ?';

    // Executa a consulta
    db.query(queryString, [email, password], (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta:', err);
            res.status(500).send('Erro ao autenticar usuário');
            return;
        }

        if (results.length === 1) {
            // Usuário autenticado com sucesso
            const user = results[0]; // O primeiro resultado da consulta
            res.status(200).json(user);
        } else {
            // Credenciais inválidas
            res.status(401).send('Credenciais inválidas');
        }
    });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});




