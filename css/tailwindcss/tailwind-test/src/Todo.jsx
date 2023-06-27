import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
        <li className="flex items-center mb-2">
            <span className="mr-2">{todo}</span>
            <button
                onClick={onDelete}
                className="btn-primary"
            >
                Delete
            </button>
        </li>
    )
}
// Todos 和 Todo  区别？ 
// Todos 自有状态 StateFullComponent 
// Todo  StateLessComponent  无状态组件 UI展示 

export default Todo;