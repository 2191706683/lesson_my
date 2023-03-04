<template>
   <!-- html5 语义化 -->
   <main>
        <h1>Todos</h1>
        <button @click="todosStore.clearCompletedTodos" class="clear">Clear completed todos</button>
        <div class="prog">
            <progress
                :max="todosStore.todos.length"
                :value="todosStore.completedTodos.length"
            >
            </progress>
            <p>
                <b>{{ todosStore.completedTodos.length }}</b> out of
                <b>{{ todosStore.todos.length }}</b>
            </p>
        </div>
        <div class="todos" v-for="todo in todosStore.todos" :key="todo.id">
            <li class="todo">
                <input 
                    type="checkbox"
                    name="isComplete"    
                    :id="todo.id"
                    :checked="todo.isComplete"
                    @change="todosStore.toggleTodo(todo.id)"
                >
                <label 
                    :for="todo.id"
                    :class="{'completed':todo.isComplete}"
                >
                    {{ todo.text }}
                </label>
                <button @click="todosStore.deleteTodo(todo.id)">删除</button>
            </li>
        </div>
        <form class="addForm" @submit.prevent="addTodo">
            <label for="add">Add todo</label>
            <div class="s1">
                <input type="text" name="" id="add" v-model="currentTodoInp">
                <button type="submit">Add</button>
            </div>
        </form>
   </main>
</template>

<script setup lang="ts">
import { useTodosStore } from '../store/todos'; 
// import { useProductStore } from '../store/products';
import { ref } from 'vue';

const todosStore = useTodosStore()
// const productStore = useProductStore()
let currentTodoInp = ref('')
todosStore.initFromLocalStorage()

const addTodo = () => {
    const text = currentTodoInp.value
    currentTodoInp.value = ""

    if (text.trim() !== '') { // 去除前后空格
        todosStore.addTodo(text)
    }
}

// productStore.fetchAll()
</script>

<style scoped>
.completed {
    color: hsl(245, 20%, 76%);
    text-decoration: line-through;
}

progress {
  width: 100%;
}
.prog {
  margin-bottom: 1.5rem;
}
.prog > p {
  text-align: end;
  margin-top: 0rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 1.5rem;
}
input[type="checkbox"] {
  display: inline-block;
  padding: 1rem;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}
.clear {
  margin-bottom: 1.5rem;
  border: 1px solid hsl(244, 7%, 54%);
  color: hsl(247, 34%, 85%);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
  cursor: pointer;
}
label.completed {
  color: hsl(245, 20%, 76%);
  text-decoration: line-through;
}
.addForm {
  margin-top: 1rem;
  border-top: 1px solid #242424;
  padding: 1rem 0;
}
.addForm > label {
  display: block;
  color: #ccc5d8;
}
.sl {
  display: flex;
  margin-top: 0.25rem;
}
.sl > input {
  border: 1px solid #3f3f3f;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.25rem;
  width: 100%;
}
.sl > button {
  border-color: #42d392;
  background-color: #42d392;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #1a1a1a;
}
</style>