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

              <label for="nameUser">Nome:</label>

              <input type="text" id="name" v-model="formData.nameUser" class="form-control" required>

            </div>

          </div> 

          <div class="col-md-6">

            <div class="form-group">

              <label for="email">Email:</label>

              <input type="email" id="email" v-model="formData.email" class="form-control" required>

            </div>

            <div class="form-group">

              <label for="birthdate">Data de Nascimento:</label>

              <input type="date" id="birthdate" v-model="formData.birthdate" class="form-control" required>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">

              <label for="phone">Telefone:</label>

              <input type="tel" id="phone" v-model="formData.phone" class="form-control" required>

            </div>

            <div class="form-group">

              <label for="cpf">CPF:</label>

              <input type="text" id="cpf" v-model="formData.cpf" class="form-control" required>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group">

              <label for="senha">Senha:</label>

              <input type="text" id="senha" name="senha" @change="checkPasswords" v-model="formData.senha" class="form-control" :style="{ 'border-color': passwordsMatch ? '' : 'red' }" required>

              <div v-if="passwordsMatch == false" class="text-danger">As senhas não coincidem.</div>

            </div>

          </div>

          <div class="col-md-6">

            <div class="form-group"> 

              <label for="senha_confirm">Confirme sua Senha:</label>

              <input type="text" id="senha_confirm" name="senha_confirm" @change="checkPasswords" v-model="formData.senha_confirm" class="form-control" :style="{ 'border-color': passwordsMatch ? '' : 'red' }" required>

              <div v-if="passwordsMatch == false" class="text-danger">As senhas não coincidem.</div>

            </div>

          </div> 

        </div>
      
        <br>

        <button type="submit" class="btn btn-dark">Enviar</button>

      </div>

    </div>

    </div>

    <br>

  </div>

  </template>


<script>
export default {
  name: "PrimeiroAcesso",
  data() {
    return {
      formData: {
        nameUser:  '',
        email:     '',
        phone:     '',
        birthdate: '',
        cpf: '',
        senha: '',
        senha_confirm: '',
      }
    , passwordsMatch: true,
    };
  }, 
  methods: {
    checkPasswords(){
      var sSenha = this.formData.senha;
      var sSenhaConfirm = this.formData.senha_confirm;


      if(sSenha.length > 3 && sSenhaConfirm.length > 3 && sSenha != sSenhaConfirm){
        this.passwordsMatch = false
      } else {
        this.passwordsMatch = true
      }
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
