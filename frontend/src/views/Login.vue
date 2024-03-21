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
                  
                  <label for="email">Email:</label>
                  
                  <input type="text" id="email" v-model="email" class="form-control" required>
                  
                </div>
                
                <div class="form-group">
                  
                  <label for="password">Senha:</label>
                  
                  <input type="password" id="password" v-model="password" class="form-control" required>
                  
                </div>
                
                <br>
                
                <button type="submit" class="btn btn-dark btn-block">Entrar</button>
                
              </form>
              
              <div class="forgot-password">
                
                  <!---<a href="#">Esqueci minha senha</a> | -->
                  
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
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';

export default {

  data() {
    return {
      name: 'Login',
      type: 'login',
      email: '',
      password: ''
    };
  },
  mounted() {
    // Limpa o localStorage após o componente ter sido montado (carregado)
    localStorage.clear();
  },
  methods: {

    login() {

      axios.post(BACKEND_URL+this.type, {
          email: this.email,
          password: this.password 
      })
      .then(response => {
          /*console.log('Resposta:', response); // Verifica a resposta completa
          console.log(response.status)*/
          if(response.status == 200){ 
            alert("Login bem sucedido!")
            localStorage.setItem('isAuthenticated', "true");
            localStorage.setItem('userId', response.data.user_id);
            localStorage.setItem('userName', response.data.user_name);
            window.location.href = '/';
          }
      })
      .catch(error => {
        if (error.response) {

          if(error.response.status == 401){
            alert('Atenção! Email ou senha inválidos.');
            this.email    = ''
            this.password = ''
          } else {
            alert('Ocorreu um erro na sua solicitação. Por favor, tente novamente mais tarde.');
          }

        } else if (error.request) {
          alert('Sem resposta do servidor:', error.request);
        } else {
          alert('Erro ao configurar a solicitação:', error.message);
        }

      });
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
