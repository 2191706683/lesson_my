import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app
    .use(store) // install 去扩展vue 的this 原型链上加一个$store 指向store仓库
    .mount('#app')
    