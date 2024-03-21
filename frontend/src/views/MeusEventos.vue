<template>

<div class="box-eventos  d-flex justify-content-center">
 
  <h2 class="text-center" v-show="eventos != undefined">Lista de Eventos</h2>

  <div class="no-event" v-show="eventos == undefined">
    <h2 class="text-center">Você não possui nenhum evento agendado, clique no botão para criar um</h2>

    <a href="/evento" class="btn btn-blue btn-bg">Novo</a>
  </div>
 
  <table v-show="eventos != undefined" class="table rounded-circle">

    <thead >

      <tr >

        <th scope="col" class="header-eventos">Nome</th>
        <th scope="col" class="header-eventos">Início</th>
        <th scope="col" class="header-eventos">Término</th>
        <th scope="col" class="header-eventos">Organizador</th>
        <th scope="col" class="header-eventos"><a href="/evento" class="btn btn-dark btn-sm">Novo</a></th>
      </tr>

    </thead>
 
    <tbody>

      <tr v-for="(evento, evento_id) in eventos" :key="evento_id">
        <td>{{ evento.event_name }}</td>
        <td>{{ evento.event_start }}</td>
        <td>{{ evento.event_end }}</td>
        <td>{{ evento.user_name }}</td> 
        
        <td> 

          <img src="/icons/icon-info.svg"  :title="evento.event_desc">
          <img v-show="userId == evento.user_id" src="/icons/icon-edit.svg" alt="Editar" title="Editar" @click="editEvent(evento.event_id)">
          <img v-show="userId == evento.user_id" src="/icons/icon-trash.svg" alt="Deletar" title="Deletar" @click="deleteEvent(evento.event_id)">

        </td>

      </tr>

    </tbody>

  </table>

</div>

</template>

<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';

export default {
  data() {
    return {
      eventos: [], // Array de eventos será retornado e atribuído a esta variável
      type: 'eventList',
      typeDelete: 'eventDelete',
      errorMessage: '',
      userId: localStorage.getItem('userId')
    };
    
  },
  mounted() {
    this.eventos = this.searchEvents();
  },
  methods: {
    searchEvents() {

      axios.post(BACKEND_URL+this.type, {
        user_id: localStorage.getItem('userId')
      })
        .then(response => {
          if(response.status == 200){ 
            this.eventos = response.data;
          }
        })
        .catch(error => {
          this.errorMessage = error.response.events;
          if(this.errorMessage == undefined){

          } else {
            alert('Atenção! Erro ao carregar eventos! ' + this.errorMessage);
          }
        });

    },
    deleteEvent(eventId){
      
      if(confirm("Tem certeza que deseja deletar esse evento?")){
        axios.post(BACKEND_URL+this.typeDelete, {
        event_id: eventId
      })
        .then(response => {
          if(response.status == 200){ 
            this.eventos = response.data;
            alert("Evento deletado com sucesso!") 
          }
        })
        .catch(error => {
          this.errorMessage = error.response.events;
          alert('Atenção! Erro ao deletar evento! ' + this.errorMessage);
        });
      } 
    },
    editEvent(eventId){
      this.$router.push({ name: 'evento', params: { eventId: eventId } });
    }
  }
};
</script>

<style>

.header-eventos {
  background-color: #5bb2d4 !important;
  color: white !important; 
  font-weight: bold;
} 

.header-eventos-button {
  border-top: 0 !important;

} 

.box-eventos {
  margin-top: 2%;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

@media (min-width: 767px) {
  .table {
    margin-left: 5%;
    margin-right: 5%;
    width: 90% !important;
  }
}

.table {
  border-radius: 50%;
}
/* Estilos opcionais */


/* Estilos para o modal */
.modal {
  display: none; /* Ocultar o modal por padrão */
  position: fixed; /* Posição fixa */
  z-index: 1; /* Colocar o modal sobre outros elementos */
  left: 0;
  top: 0;
  width: 100%; /* Largura total */
  height: 100%; /* Altura total */
  overflow: auto; /* Adicionar rolagem quando necessário */
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo escura com transparência */
}

.modal-content {
  background-color: #fefefe; /* Cor de fundo do modal */
  margin: 15% auto; /* Centralizar verticalmente e ajustar margens */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Largura do conteúdo do modal */
}
</style>
