<template>
  
  <div class="login-container">
    
    <img src="/logo.png" alt="" width="300" height="300">
    
    <div class="login-page">
      
    <div class="container">
      
      <div class="row justify-content-center">
        
        <div class="col-md-6"> 
          
          <div class="card">
            
            <div class="card-header"><b>Faça o Login</b></div> 
            
            <div class="card-body">
              
              <form @submit.prevent="login">
                
                <div class="form-group">
                  
                  <label for="username">Usuário:</label>
                  
                  <input type="text" id="username" v-model="username" class="form-control" required>
                  
                </div>
                
                <div class="form-group">
                  
                  <label for="password">Senha:</label>
                  
                  <input type="password" id="password" v-model="password" class="form-control" required>
                  
                </div>
                
                <br>
                
                <button type="submit" class="btn btn-dark btn-block">Entrar</button>
                
              </form>
              
              <div class="forgot-password">
                
                  <a href="#">Esqueci minha senha</a> |
                  
                  <a href="/primeiro-acesso">Primeiro acesso</a>
                  
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      name: 'Login',
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lógica de login aqui
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
      // Redirecionar para outra página após o login, se necessário
    }
  }
}
</script>

<style scoped>
.login-page {
  height: 50vh;
  display: flex;
  align-items: center;
  align-items: flex-start; 
}

.login-container {
  margin-top: 25px; 
  margin-bottom: 25px; 
}


.forgot-password a{
  color: #5bb2d4;
}

.forgot-password a:hover {
  color: #9ad3eb;
}
</style>
