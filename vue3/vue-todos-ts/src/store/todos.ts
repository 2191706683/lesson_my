import { ref, Ref, reactive, computed } from 'vue'
import { defineStore } from "pinia";
import { nanoid } from 'nanoid';

// 告别类式编程 函数式
type Todo = { id: string; text: string; isComplete: boolean} // 自定义类型
const lsKey = '_v_todos'

export const useTodosStore = defineStore('todos', () => {
    // 泛型
    const todos: Ref<Todo[]> = ref([]) // 每一项的类型
    
    // 5%
    const addTodo = (text:string) => {
        todos.value = [
            ...todos.value,
            {
                id: nanoid(),
                isComplete: false,
                text
            }
        ]
        updateLocalStorage()
    }

    const updateLocalStorage = () => {
        localStorage.setItem(lsKey, JSON.stringify(todos.value))
    }

    const initFromLocalStorage = () => {
        const lstodos = localStorage.getItem(lsKey)

        if (lstodos === null) {
            todos.value = []
        } else {
            todos.value = JSON.parse(lstodos)
        }
    }

    const completedTodos = computed(() => 
        todos.value.filter(todo => todo.isComplete === true)
    )

    const toggleTodo = (id :string) => {
        // todos 更新
        todos.value.forEach(todo => {
            if (todo.id === id) todo.isComplete = !todo.isComplete
        }) // 引用式
        updateLocalStorage()
    }

    const clearCompletedTodos = () => {
        todos.value = todos.value.filter(todo => todo.isComplete === false)
        updateLocalStorage()
    }

    const deleteTodo = (id: string) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
        updateLocalStorage()
    }

    return {
        todos,
        addTodo,
        initFromLocalStorage,
        completedTodos,
        toggleTodo,
        clearCompletedTodos,
        deleteTodo
    }
})