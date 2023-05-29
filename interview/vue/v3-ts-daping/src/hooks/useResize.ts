import { onMounted, onUnmounted } from 'vue';
// -hooks 函数式编程 可以把数据状态 生命周期 复用
// 事件监听 定时器 unmounted 移除
// - vueUse / ahooks
/**
 * 窗口缩放 three.js 重绘 renderer.render()
 * @param handlerFn 回调函数
 * @param immediate 立即调用
 */
export function useResize<T = any>(
    handlerFn: () => T,
    immediate: boolean = true
) {
   const handler = () => {
        handlerFn();
   }
   onMounted(() => {
        window.addEventListener('resize', handler);
        immediate && handler();
   })
   onUnmounted(() => {
        window.removeEventListener('resize', handler);
   })
}