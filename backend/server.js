const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Defina o diretório de onde o frontend será servido
app.use(express.static(path.join(__dirname, '../frontend')));

// Defina suas rotas API aqui
app.get('/api/exemplo', (req, res) => {
    // Lógica da API aqui
    res.json({ message: 'Exemplo de resposta da API' });
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
