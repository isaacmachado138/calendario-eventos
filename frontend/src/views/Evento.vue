<template>

  <div class="container">

    <h2 v-if="!eventEditId">Novo Evento</h2>
    <h2 v-else >Editar Evento</h2>
    <br>

    <div class="card">

      <div class="card-header" v-if="!eventEditId"><b>Preencha os dados para registrar:</b></div> 
      <div class="card-header" v-else><b>Preencha os dados para editar:</b></div> 

      <div class="row justify-content-center card-body">

      <div class="col-md-8">

        <div class="row">

          <div class="col-md-12">

            <div class="form-group">

              <label for="event_name">*Nome:</label>

              <input type="text" id="event_name" v-model="formData.event_name" class="form-control" required>

            </div>

          </div> 

          <div class="col-md-6">

            <div class="form-group">

              <label for="event_start">*Início:</label>

              <input type="datetime-local" id="event_start" v-model="formData.event_start" class="form-control" required>

            </div>


          </div>

          <div class="col-md-6">

            <div class="form-group">

              <label for="event_end">Término:</label>

              <input type="datetime-local" id="event_end" v-model="formData.event_end" class="form-control" required>
 
            </div>

          </div>

          <div class="col-md-12">

            <div class="form-group">

              <label for="event_desc">Descrição:</label>

              <textarea class="form-control" id="event_desc" rows="3" v-model="formData.event_desc"></textarea>

            </div>

          </div>

        </div>
      
        <br>

        <div class="row">

          <div class="col-md-4 offset-md-4 text-center">

            <button type="submit" class="btn btn-dark" @click="insertEvent">Salvar</button>

          </div>

        </div>

      </div>

    </div>

    </div>

    <br>

  </div>

  </template>


<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';

export default {
  name: "Evento",
  data() {
    return {
      formData: {
        event_id:       '',
        event_name:     '',
        event_start:    '',
        event_end:      '',
        event_desc:     '',
      },
    type: 'eventRegister',
    eventEditId: '',
    errorMessage: ''
    };
  },  
  mounted() {
    this.eventEditId = this.$route.params.eventId;
    if(this.eventEditId){

      this.type = 'eventEdit'

      axios.post(`${BACKEND_URL}eventLoad`, {
          event_id: this.eventEditId
      })
      .then(response => {

          if(response.status == 200){  
            //console.log(response.data)
            this.formData.event_id = response.data.event_id
            this.formData.event_name = response.data.event_name
            this.formData.event_start = response.data.event_start
            this.formData.event_end = response.data.event_end
            this.formData.event_desc = response.data.event_desc
          }
      }).catch(error => {
        alert('Erro ao editar evento!', error.request);
        window.location.href = '/';
      });
    }
  },
  methods: {
    checkDate(){
      var sDateStart = this.formData.event_start
      var sDateEnd   = this.formData.event_end

      // Verificar se as datas estão preenchidas
      if (!sDateStart || !sDateEnd) {
        alert('Por favor, preencha as datas de início e término.');
        return false;
      }

       // Converter as datas para objetos Date
        const dDateStart = new Date(sDateStart);
        const dDateEnd   = new Date(sDateEnd);
        const dDataNow   = new Date();
        dDataNow.setHours(dDataNow.getHours() - 1);

        // Verificar se a data de término é anterior à data de início
        if (dDateEnd <= dDateStart) {
          alert('A data e hora de término deve ser posterior à data e hora de início.');
          return false;
        }

          // Verificar se a data de início é anterior a data atual
          if (dDateStart < dDataNow) {
            alert('Não é possível criar eventos com datas de início retroativas.');
          return false;
        }

        return true;
    },
    insertEvent(){
      if(!this.checkDate()){
        return false;
      } 

      if (!this.formData.event_name || !this.formData.event_start || !this.formData.event_end) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      const eventData = {
        event_id:          this.eventEditId,
        event_name:        this.formData.event_name,
        event_start:       this.formData.event_start.replace('T', ' '),
        event_end:         this.formData.event_end.replace('T', ' '),
        event_desc:        this.formData.event_desc,
        user_id:           localStorage.getItem('userId')
      };

      axios.post(BACKEND_URL+this.type, eventData)
        .then(response => {
          if(response.status == 200){ 
            if(this.type == 'eventEdit'){
              alert("Evento atualizado com sucesso!")
            } else {
              alert("Evento registrado com sucesso!")
            } 
            window.location.href = '/';
          }
        })
        .catch(error => {
          this.errorMessage = error.response.data;

          if(this.type == 'eventEdit'){
              alert('Atenção! Erro ao atualizar evento! ' + this.errorMessage);
            } else {
              alert('Atenção! Erro ao registrar evento! ' + this.errorMessage);
            }
        });

    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 25px; /* Ajuste a margem superior conforme necessário */
  margin-bottom: 50px; 
}

.card {
  margin-bottom: 25px; 
}

</style>
