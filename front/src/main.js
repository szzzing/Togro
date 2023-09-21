import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import axios from '@/axios/index'

const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(router)
    .mount('#app');