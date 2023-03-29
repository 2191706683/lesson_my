<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'; // hooks  函数式编程
import { GlobalDataProps } from './types'; 
// 为什么拥抱pinia？
// 1. pinia hooks 更好 defineStore
// 2. vuex 对ts 支持不如pinia
// ref reactive 私有状态
// computed  store.state
const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)
</script>

<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser" />
  </div>
</template>

<style scoped>
</style>
