import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 段路径 别名 快捷方式
    alias: {
      '@': resolve(__dirname, 'src'), // @ -> src 目录所在的物理绝对位置
      '~': resolve(__dirname, 'src/components')
    }
  }
})
