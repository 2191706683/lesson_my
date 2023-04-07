import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 为何不走main.ts  来到vite 编译工程
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// main.ts  热更新 重新编译  开发时候的打包速度 上线后的更新大小
// element-plus 需要这样做吗？单独打包，单独编译 缓存
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	]
});
