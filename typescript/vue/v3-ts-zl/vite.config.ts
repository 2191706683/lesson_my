import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: false,
    proxy: {
      '/api': {
        target: 'http://api.vikingship.xyz/api',
        // 是否允许跨域， 在本地会创建一个虚拟服务器， 
        // 然后发送请求的数据
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, "") 
      }
    }
  }
})
