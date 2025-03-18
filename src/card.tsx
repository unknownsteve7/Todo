import React, { useState } from 'react'
import deleteIcon from './assets/delete.png';
function Todo() {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState('');
    function handleInputChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setTodo(event.target.value);

    }

    function addTask() {
        if (todo.trim() !== '') {
            setTodos([todo, ...todos]);
            setTodo('');

        }

    }
    function deleteTask(index: number) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);

    }
    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTodos = [...todos];
            const temp = updatedTodos[index];
            updatedTodos[index] = updatedTodos[index - 1];
            updatedTodos[index - 1] = temp;
            setTodos(updatedTodos);
        }

    }
    function moveTaskDown(index: number) {
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            const temp = updatedTodos[index];
            updatedTodos[index] = updatedTodos[index + 1];
            updatedTodos[index + 1] = temp;
            setTodos(updatedTodos);
        }

    }
    return (
        <div className="todo">
            <h1>Todo App</h1>
            <div className="add-todo">
                <input type="text"
                    placeholder='Enter a task...'
                    value={todo}
                    onChange={handleInputChange}
                    onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        if (event.key === 'Enter') {
                            addTask();
                        }
                    }} />


                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ol>

                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className='delete-button' onClick={() => deleteTask(index)}><img src={deleteIcon} alt="delete" height="13px" /></button>
                        <button className="update-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="update-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default Todo;