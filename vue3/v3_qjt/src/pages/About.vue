<template>
  <div>
    about
    <div @click="add">
      {{ count }}
    </div>
  </div>
</template>

<script setup>
  // vuex 数据可以超越组件进行共享  全局 login  跨组件，非兄弟
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  let store = useStore()
  let count = computed(() => store.state.count)

  function add() {
    store.commit('ADD')
  }
</script>

<style>

</style>