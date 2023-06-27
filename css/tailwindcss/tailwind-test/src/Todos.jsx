import { useState } from 'react';
import Todo from './Todo';
import useLocalStorage from './hooks/useLocalStorage';

const Todos = () => {
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useLocalStorage('todos', []);
    // vue 双向绑定 react 单向绑定
    const [newTodo, setNewTodo] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() === '') return;
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
        <div className='container max-auto mt-4'>
            <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
            <form className="flex mb-4" onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    value={newTodo}
                    placeholder='Enter a todo...'
                    className="shadow appearance-none border w-full py-2 px-3 mr-2
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                    "
                    onChange={(e) => setNewTodo (e.target.value)}    
                />
                <button
                    type="submit" 
                    className="btn-primary"
                >Add</button>
            </form>
            <ul>
                {
                    todos.map((todo, index) => (
                        <Todo 
                            key={index}
                            todo={todo}
                            onDelete={() => handleDeleteTodo(index)}
                        />
                    ))
                }
            </ul>
        </div>  
    )
}

export default Todos;