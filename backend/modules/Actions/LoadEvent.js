

// Função para deletar evento no banco de dados
function loadEvent(db, event_id, callback) {

  db.query('SELECT * FROM event WHERE event_id = ?', event_id, (error, result) => {
    if (error) {
      console.error('Erro ao executar consulta:', error);
      callback(err, null);
      return;
  }

  if (result.length === 1) {
    const event = result[0]; // O primeiro resultado da consulta

    /* Formatando valores retornados para preencherem campos de data do formulário */
    if(event.event_start){
      dataIni                = new Date(event.event_start)
      let ano                = dataIni.getFullYear();
      let mes                = (dataIni.getMonth() + 1).toString().padStart(2, '0'); ; 
      let dia                = (dataIni.getDate()).toString().padStart(2, '0');
      let horas              = (dataIni.getHours()).toString().padStart(2, '0');
      let minutos            = (dataIni.getMinutes()).toString().padStart(2, '0');
      event.event_start      = `${ano}-${mes}-${dia}T${horas}:${minutos}`;
    }

    if(event.event_end){
      dataFim              = new Date(event.event_end)
      let ano              = dataFim.getFullYear();
      let mes              = (dataFim.getMonth() + 1).toString().padStart(2, '0'); ; 
      let dia              = (dataFim.getDate()).toString().padStart(2, '0');
      let horas            = (dataFim.getHours()).toString().padStart(2, '0');
      let minutos          = (dataFim.getMinutes()).toString().padStart(2, '0');
      event.event_end      = `${ano}-${mes}-${dia}T${horas}:${minutos}:00`;
    }

    callback(null, event);
} else {
    callback('Evento inválido', null);
}
  });
  
}

module.exports = {
  loadEvent
};
