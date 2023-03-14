<script setup>
import { ref, onMounted, nextTick } from 'vue'

let count = ref(0)

// 是event loop 的事件 微任务 
onMounted(() => {
  count.value++ // 内存里同步 -> vdom diff -> dom 的更新是异步的（微任务） 1 异步的
  // promise 封装dom 更新任务
  // promise 下一次的DOM 更新完才会触发
  nextTick(() => {
    console.log(document.querySelector('.count').innerText) // ? 1
  })
  count.value++
})
</script>

<template>
  <div class="count">{{count}}</div>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" :key="$route.name" 
        v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.name"
        v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style scoped>
</style>
