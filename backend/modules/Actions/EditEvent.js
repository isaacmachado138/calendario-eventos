

// Função para editar evento no banco de dados
function editEvent(db, eventData) {

  return new Promise((resolve, reject) => {

          db.query('UPDATE event SET ? WHERE event_id = ?', [eventData, eventData.event_id], (error, result) => {
            if (error) {
              console.log(error)
              reject(error);
            } else {
              console.log(result)
              resolve(result);
            }
          });

});

}

module.exports = {
  editEvent
};
