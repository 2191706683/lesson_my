import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'

// 大屏适配
(function(doc , win ) {
    const fn = () => {
        const docEl = doc.documentElement, // html 标签 
            clientWidth = docEl.clientWidth; // 窗口宽度
        
            if (!clientWidth) return;
            // 设计稿 
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';

    }
    win.addEventListener('resize', fn); // 旋转屏幕 防抖
    // vue  computed 
    doc.addEventListener('DOMContentLoaded', fn);
})(document, window)

createApp(App)
    .mount('#app')