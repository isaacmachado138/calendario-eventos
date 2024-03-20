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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 

/* Estilos do componente aqui */
</style>
