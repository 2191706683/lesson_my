import React, { useReducer, useState } from 'react';
// 初始化数据
const initialState = {
    todos: []
}
interface Todo {
    id: number;
    text: string;
    complete: boolean;
}
interface TodosState {
    todos: Todo[]
}
type TodosAction =
    | { type: 'ADD_TODO', payload: Todo }
    | { type: 'REMOVE_TODO', payload: number }
    | { type: 'TOGGLE_TODO', payload: number }

// 开始的时候执行一次， 返回initialState
// dispatch todosReducer重新执行
// actions + mutations = reducer
const todosReducer = (state: TodosState, action: TodosAction) => {
    // 新的状态
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] }
            break;
        case 'REMOVE_TODO':
            return { todos: state.todos.filter(todo => todo.id !== action.payload) }
            break;
        case 'TOGGLE_TODO':
            return { todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo)) }
            break;

        default:
            return state
    }
}


const TodoList: React.FC = () => {
    // state 响应式的状态  dispatch 用来派发动作的   
    const [state, dispatch] = useReducer(todosReducer, initialState)
    // setTimeout(() => {
    //     dispatch({ type: 'ADD_TODO', payload: { id: 1, text: '打豆豆', complete: false } })
    // }, 1000)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent) => {
        setInputValue(e.target.value)
    }
    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: { id: Math.random(), text: inputValue, complete: false } })
        setInputValue('')
    }
    const handleToggleTodo = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: state.todos[0].id })
    }
    const handleRemoveTodo = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: id })
    }

    return (
        <>
            <div className='container mx-auto py-8'>
                <h1 className='text-3xl font-bold mb-4 bg-blue-500'>TodoList</h1>
                <input 
                    className=''
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='bg-blue-500' onClick={handleAddTodo}>
                    Add Todo
                </button>
            </div>
            <ul>
                {
                    state.todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{ textDecoration: todo.complete ? 'line-through' : '' }}
                        >
                            <span onClick={() => handleToggleTodo(todo.id)}>
                                {todo.text}
                            </span>
                            <button onClick={() => handleRemoveTodo(todo.id)}>
                                Delete
                            </button>
                            {todo.id}
                            {todo.text}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList