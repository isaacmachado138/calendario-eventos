<template>
<div class="box-eventos  d-flex justify-content-center">
  <h2 class="text-center">Lista de Eventos</h2>
  <table class="table rounded-circle">
    <thead >
      <tr >
        <th scope="col" class="header-eventos">Data</th>
        <th scope="col" class="header-eventos">Local</th>
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
      eventos: [] // Array de eventos será retornado e atribuído a esta variável
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
    }
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
</style>
