<template>

  <div class="container">

    <img src="/logo.png" alt="" width="300" height="300">

    <h2>Seja bem vindo(a)!</h2>

    <div class="card">

      <div class="card-header"><b>Preencha seus dados para se registrar:</b></div> 

      <div class="row justify-content-center card-body">

      <div class="col-md-8">

        <div class="row">

          <div class="col-md-12">

            <div class="form-group">

              <label for="user_name">*Nome:</label>

              <input type="text" id="user_name" v-model="formData.user_name" class="form-control" required>

            </div>

          </div> 

          <div class="col-md-6">

            <div class="form-group">

              <label for="user_email">*Email:</label>

              <input type="user_email" id="user_email" v-model="formData.user_email" class="form-control" required>

            </div>

            <div class="form-group">

              <label for="user_nasc">Data de Nascimento:</label>

              <input type="date" id="user_nasc" v-model="formData.user_nasc" class="form-control" required>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">

              <label for="user_telefone">Telefone:</label>

              <input type="tel" id="user_telefone" v-model="formData.user_telefone" class="form-control" required>

            </div>

            <div class="form-group">

              <label for="user_cpf">CPF:</label>

              <input type="text" id="user_cpf" v-model="formData.user_cpf" class="form-control" required>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">

              <label for="user_password">*Senha:</label>

              <input type="text" id="user_password" name="user_password" @change="checkPasswords" v-model="formData.user_password" class="form-control" :style="{ 'border-color': passwordsMatch ? '' : 'red' }" required>

              <div v-if="passwordsMatch == false" class="text-danger">As senhas não coincidem.</div>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group"> 

              <label for="user_password_confirm">*Confirme sua Senha:</label>

              <input type="text" id="user_password_confirm" name="user_password_confirm" @change="checkPasswords" v-model="formData.user_password_confirm" class="form-control" :style="{ 'border-color': passwordsMatch ? '' : 'red' }" required>

              <div v-if="passwordsMatch == false" class="text-danger">As senhas não coincidem.</div>

            </div>

          </div> 

        </div>
      
        <br>

        <div class="row">

          <div class="col-md-4 offset-md-4 text-center">

            <button type="submit" class="btn btn-dark" @click="insertUser">Enviar</button>

          </div>

          <div class="col-md-4 text-right"> <!-- Coluna à direita -->

            <a href="/login" class="btn btn-blue">Página de Login</a>

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
  name: "PrimeiroAcesso",
  data() {
    return {
      formData: {
        user_name:  '',
        user_email:     '',
        user_telefone:     '',
        user_nasc: '',
        user_cpf: '',
        user_password: '',
        user_password_confirm: '',
      },
    passwordsMatch: true,
    type: 'userRegister',
    errorMessage: ''
    };
  }, 
  mounted() {
    // Limpa o localStorage após o componente ter sido montado (carregado)
    localStorage.clear();
  },
  methods: {
    checkPasswords(){
      var sSenha = this.formData.user_password;
      var sSenhaConfirm = this.formData.user_password_confirm;


      if(sSenha.length > 0 && sSenhaConfirm.length > 0 && sSenha != sSenhaConfirm){
        this.passwordsMatch = false
      } else {
        this.passwordsMatch = true
      }
    },
    insertUser(){
     
      if (!this.passwordsMatch) {
        alert('As senhas devem estar iguais.');
        return;
      } else  if (!this.formData.user_name || !this.formData.user_email || !this.formData.user_password || !this.formData.user_password_confirm) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      const userData = {
        user_name:        this.formData.user_name,
        user_email:       this.formData.user_email,
        user_telefone:    this.formData.user_telefone,
        user_nasc:        this.formData.user_nasc,
        user_cpf:         this.formData.user_cpf,
        user_password:    this.formData.user_password
      };

      axios.post(BACKEND_URL+this.type, userData)
        .then(response => {
          if(response.status == 200){ 
            alert("Usuário registrado com sucesso!")
            window.location.href = '/login';
          }
        })
        .catch(error => {
          this.errorMessage = error.response.data;
          alert('Atenção! Erro ao registrar usuário! ' + this.errorMessage);
        
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
