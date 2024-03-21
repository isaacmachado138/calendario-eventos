// Função para verificar se ja existe algum evento para esse usuario entre essa data e horario
function checkExistingEvent(db, new_user_id, new_event_start, new_event_end) {
  return new Promise((resolve, reject) => {

    var sQuery = 'SELECT COUNT(*) AS count FROM event WHERE user_id = ? AND '+
    '( (event_start < "END_EVENT" AND event_end > "START_EVENT") OR (event_start < "START_EVENT" AND event_end > "END_EVENT") '+
    ' OR (event_start >= "START_EVENT" AND event_end <= "END_EVENT") '+
    ');'; 
    sQuery = sQuery.replaceAll('START_EVENT', new_event_start)
    sQuery = sQuery.replaceAll('END_EVENT', new_event_end)
    //console.log(sQuery)
    db.query(sQuery, 
     [new_user_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        // Se count for maior que 0, significa que o email já está em uso
        const eventExists = result[0].count > 0;
        resolve(eventExists);
      }
    }); 
  });
}

// Função para inserir um novo usuário no banco de dados
function insertEvent(db, eventData) {

  return new Promise((resolve, reject) => {
    // Verificar se o email já está em uso
    checkExistingEvent(db, eventData.user_id, eventData.event_start, eventData.event_end)
      .then(eventExists => {
        if (eventExists) {
          // Se ja existe um evento nesse dia e horario, rejeitar a promessa com uma mensagem de erro
          reject(new Error('O usuário já possui um evento com nesse dia e horário.'));
        } else {
          delete eventData.event_id;
          db.query('INSERT INTO event SET ?', eventData, (error, result) => {
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
  insertEvent
};
