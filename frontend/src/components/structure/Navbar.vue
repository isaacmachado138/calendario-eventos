<template>
  <nav v-show="bLogin" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mr-auto" href="#" >
      <img src="/logo.png" alt="Bootstrap" width="50" height="50">
    </a>
    <div class="navbar-nav mx-auto"> <!-- Alinhar os itens de navegação ao centro -->
      <router-link class="nav-link" to="/" exact>Home</router-link> 
      <router-link class="nav-link" to="/meus-eventos" exact>Eventos</router-link>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      bLogin: true,
    }
  },
}
</script>


<style>
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

.separator {
  color: white;
}
</style>
