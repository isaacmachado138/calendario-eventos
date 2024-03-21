
function listEventsUser(db, user_id, callback) {

  const queryString = 'SELECT e.*, u.user_name FROM event e '+
  'LEFT JOIN user u ON (u.user_id = e.user_id)'+
  ' WHERE e.user_id = ?';

  db.query(queryString, [user_id], (err, results) => {
      if (err) {
          console.error('Erro ao executar consulta:', err);
          callback(err, null);
          return;
      }

      if (results.length > 0) {

        /* Antes de retornar trata a data e hora do evento - INI */
        for(let i = 0;i < results.length;i++){
          if(results[i].event_start){
            dataIni                = new Date(results[i].event_start)
            let ano                = dataIni.getFullYear();
            let mes                = dataIni.getMonth() + 1; 
            let dia                = dataIni.getDate();
            let horas              = dataIni.getHours();
            let minutos            = dataIni.getMinutes();
            results[i].event_start = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
          }

          if(results[i].event_end){
            dataFim              = new Date(results[i].event_end)
            let ano              = dataFim.getFullYear();
            let mes              = dataFim.getMonth() + 1; 
            let dia              = dataFim.getDate();
            let horas            = dataFim.getHours();
            let minutos          = dataFim.getMinutes();
            results[i].event_end = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
          }
        }
        /* Antes de retornar trata a data e hora do evento - FIM */


        callback(null, results);
      } else {
        // Se não houver eventos encontrados, retorna uma mensagem indicando isso
        callback('Nenhum evento encontrado para este usuário', null);
      }

  });

}

module.exports = {
  listEventsUser
};
