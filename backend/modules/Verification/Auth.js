
function verifyLogin(db, email, password, callback) {
  const queryString = 'SELECT user_id, user_name FROM user WHERE user_email = ? AND user_password = ?';

  db.query(queryString, [email, password], (err, results) => {
      if (err) {
          console.error('Erro ao executar consulta:', err);
          callback(err, null);
          return;
      }

      if (results.length === 1) {
          // Usuário autenticado com sucesso
          const user = results[0]; // O primeiro resultado da consulta
          callback(null, user);
      } else {
          // Credenciais inválidas
          callback('Credenciais inválidas', null);
      }
  });
}

module.exports = {
  verifyLogin
};
