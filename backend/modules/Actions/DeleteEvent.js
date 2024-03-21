

// Função para deletar evento no banco de dados
function deleteEvent(db, event_id) {

  return new Promise((resolve, reject) => {

          db.query('DELETE FROM event WHERE event_id = ?', event_id, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
    

});

}

module.exports = {
  deleteEvent
};
