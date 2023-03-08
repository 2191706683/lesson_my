// console.log('hello world')
// import App from './App.vue' // 引入App.vue 但是.vue文件无法识别
import { createApp } from "vue"; // 依赖关系
import App from './App.vue' 
import './assets/a.png' // 

const app = createApp(App)
app.mount('#root')

// const root = document.getElementById('root')
// root.textContent = '你喵贵姓'
