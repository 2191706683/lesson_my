import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// import store from '@/store/index.js'
import '@/mock/index'
import { createPinia } from 'pinia'
import {
    Swipe,
    SwipeItem,
    Lazyload
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './assets/main.css'


const app = createApp(App)
app
    .use(router)
    .use(createPinia())
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .mount('#app')

