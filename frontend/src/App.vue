<template>
  <div id="app">
    <header>

      <Navbar />
      <!-- Seu cabeçalho padrão aqui -->

    </header>

    <!-- Conteúdo da página -->
    <router-view></router-view>

    <Footer />

  </div>
</template>

<script>
import Navbar from './components/structure/Navbar.vue'
import Footer from './components/structure/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
  // Lógica do componente aqui
}
</script>

<style global>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #5bb2d4;
}

.card {
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa !important;
  border-bottom: 1px solid #5bb2d4 !important;
}

.card-body {
  padding: 2rem;
}

.btn-blue {
  background-color: #5bb2d4 !important;
  color: white !important;
}
/* Estilos do componente aqui */
</style>
