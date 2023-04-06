import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
const app = createApp(App)
app
    .use(router)
    .use(store)
    .mount('#app')
