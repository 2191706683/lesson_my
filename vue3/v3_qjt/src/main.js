import { createApp } from 'vue'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css' // css 文件
// 入口文件里 启用vue-router
import router from './router/index'
import store from './store/index'

createApp(App)
    .use(router) // use 使用  单页应用
    .use(store) // 启用store 数据管理
    .mount('#app')
