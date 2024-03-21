<template>
  
  <nav v-show="isAuthenticated" class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <a class="navbar-brand mr-auto" href="#" >
      
      <img src="/logo.png" alt="Bootstrap" width="50" height="50">
      
    </a>
    
    <div class="navbar-nav mx-auto"> <!-- Alinhar os itens de navegação ao centro -->
      
      <router-link class="nav-link" to="/" exact>Home</router-link> 
      
      <router-link class="nav-link" to="/meus-eventos" exact>Eventos</router-link>
      
    </div>

    <div class="nav-sair mr-2">

      <div class="navbar-nav ml-auto"> 

        <a class="nav-link text-danger" href="#" @click="logout()">Sair</a> 

      </div>

    </div>

    
  </nav>
  
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      isAuthenticated: localStorage.getItem('isAuthenticated') == "true"
    }
  },
  methods: {
    logout(){
      localStorage.clear();
      window.location.href = '/login';
    }
  }
}
</script>


<style>
.separator {
  color: white;
}

.nav-sair{
  margin-right: 10px !important;
}
</style>
