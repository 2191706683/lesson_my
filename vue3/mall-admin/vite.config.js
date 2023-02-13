import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 文件 路径 属于哪个模块？ os io模块
console.log(__dirname, resolve(__dirname, 'src'))
// alias
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
