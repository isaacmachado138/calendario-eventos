// Importe o pacote mysql
const mysql = require('mysql');
const debug = require('debug')('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',      // Endereço do servidor do banco de dados
    user: 'root',    // Nome de usuário do anco de dados
    password: 'isaac1234',  // Senha do banco de dados
    database: 'Calendario',  // Nome do banco de dados que você quer se conectar
    insecureAuth: true
});

// Ativar o modo debug para a conexão MySQL
connection.on('enqueue', (sequence) => {
  debug(sequence.sql);
});

// Conecta ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});


// Exporte a conexão para que você possa utilizá-la em outros arquivos
module.exports = connection;
