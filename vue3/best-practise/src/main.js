import { createApp } from 'vue'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router/index'
import './assets/css/reset.css' // 样式重置
// import './test' 引入 才会执行

const app = createApp(App)
// 链式调用 
app
    .use(Element3) // 启用Element3 全局组件
    .use(router)    // 启用路由 SPA
    .mount('#app') // 挂载
