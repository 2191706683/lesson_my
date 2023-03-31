<script setup lang="ts">
import GlobalHeader from './components/GlobalHeader.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'; // hooks  函数式编程
import { GlobalDataProps } from './types'; 
import { getColumn } from './api/column'

// 为什么拥抱pinia？
// 1. pinia hooks 更好 defineStore
// 2. vuex 对ts 支持不如pinia
// ref reactive 私有状态
// computed  store.state
const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)
fetch('/api/columns?currentPage=1&pageSize=3')
    .then(data => data.json())
    .then(data => {
      console.log(data)
    })
getColumn()
    .then(data => {
      console.log(data)
    })

</script>

<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser" />
  </div>
</template>

<style scoped>
</style>
