<template>
  <div>
    <h1 @click="add" class="red">{{ count }} --- {{ state.count }}</h1>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  // ref 项目式  简单值
  let state = reactive({
    count: 1
  })
  let count = ref(1)
  function add() {
    count.value++
    state.count++
  }
</script>

<style>
  .red {
    color: red;
  }
</style>