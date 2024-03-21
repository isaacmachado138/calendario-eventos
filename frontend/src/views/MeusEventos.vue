<template>

<div class="box-eventos  d-flex justify-content-center">

  <h2 class="text-center">Lista de Eventos</h2>

  <table class="table rounded-circle">

    <thead >

      <tr >

        <th scope="col" class="header-eventos">Nome</th>
        <th scope="col" class="header-eventos">Data</th>
        <th scope="col" class="header-eventos">Início</th>
        <th scope="col" class="header-eventos">Término</th>
        <th scope="col" class="header-eventos"></th>
      </tr>

    </thead>

    <tbody>

      <tr v-for="(evento, index) in eventos" :key="index">
        <td>{{ evento.nome }}</td>
        <td>{{ evento.data }}</td>
        <td>{{ evento.hora_inicio }}</td>
        <td>{{ evento.hora_termino }}</td>
        
        <td> 

          <img src="/icons/icon-info.svg"  :title="evento.descricao">
          <img src="/icons/icon-edit.svg" alt="Editar" title="Editar">
          <img src="/icons/icon-trash.svg" alt="Deletar" title="Deletar" >

        </td>

      </tr>

    </tbody>

  </table>

</div>

</template>

<script>
export default {
  data() {
    return {
      eventos: [], // Array de eventos será retornado e atribuído a esta variável
      /*idModal: null,
      nomeModal: '',
      dataModal: '',
      horaInicioModal: '',
      horaTerminoModal: '',
      isModalOpen: false // Variável para controlar se o modal está aberto ou fechado*/

    };
  },
  mounted() {
    // Aqui você pode fazer uma chamada para buscar os eventos e atualizar a variável eventos com os dados retornados
    // Por exemplo:
    this.eventos = this.buscarEventos();
  },
  methods: {
    buscarEventos() {
      // Simulação de busca de eventos
      return [
        { nome: 'Evento 1', data: '11/03/2024', hora_inicio: "19:00", hora_termino: "21:30", descricao: "desc1"},
        { nome: 'Evento 2', data: '15/03/2024', hora_inicio: "20:00", hora_termino: "21:30", descricao: "desc2" },
        { nome: 'Evento 3', data: '20/03/2024', hora_inicio: "21:00", hora_termino: "21:30", descricao: "desc3" }
      ];
    },
  }
};
</script>

<style>

.header-eventos {
  background-color: #5bb2d4 !important;
  color: white !important; /* opcional: altera a cor do texto para branco para melhorar a visibilidade */
  font-weight: bold;
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
