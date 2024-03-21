import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Importa todos os componentes do Bootstrap JavaScript 

createApp(App).use(router).mount('#app')