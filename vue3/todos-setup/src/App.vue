<template>
  <div>
    <h1>这是首页</h1>
    <TodoList />
  </div>
</template>

<script setup>
// 1. vue3 setup 机制
// 组件可以降低开发的难度
// 组件可以复用 class 大写
import TodoList from './components/TodoList.vue'
import MyButton from './components/MyButton.vue'
</script>

<style>

</style>