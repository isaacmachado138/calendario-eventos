// Função para verificar se o email já está registrado no banco de dados
function checkExistingEmail(db, email) {
  return new Promise((resolve, reject) => {

    db.query('SELECT COUNT(*) AS count FROM user WHERE user_email = ?', email, (error, result) => {
      if (error) {
        reject(error);
      } else {
        // Se count for maior que 0, significa que o email já está em uso
        const emailExists = result[0].count > 0;
        resolve(emailExists);
      }
    });
  });
}

// Função para inserir um novo usuário no banco de dados
function insertUser(db, userData) {

  return new Promise((resolve, reject) => {
    // Verificar se o email já está em uso
    checkExistingEmail(db, userData.user_email)
      .then(emailExists => {
        if (emailExists) {
          // Se o email já estiver em uso, rejeitar a promessa com uma mensagem de erro
          reject(new Error('Este email já está registrado'));
        } else {
          // Se o email estiver disponível, continuar com a inserção do usuário
          db.query('INSERT INTO user SET ?', userData, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        }
      })
      .catch(error => {
        reject(error);
      });
  });

}

module.exports = {
  insertUser
};
