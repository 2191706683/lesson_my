<template>
    <div class="todos-main">
       <Item 
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          :deleteTodo="deleteTodo"
          :updateTodo="updateTodo"
          :index="index"
       />
    </div>
</template>

<script setup lang="ts">
import Item from './Item.vue'
const props = defineProps(['todos', 'deleteTodo', 'updateTodo'])
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>