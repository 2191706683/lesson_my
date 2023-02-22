import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'


const app = createApp(App)

app
    .use(store)
    .mount('#app')
