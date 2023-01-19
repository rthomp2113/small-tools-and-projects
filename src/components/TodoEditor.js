import React, { useState } from 'react';

export const TodoEditor = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoItem, setTodoItem] = useState('');

    const addItem = (event) => {
        event.preventDefault();
        setTodoList(prev => [todoItem, ...prev])
        setTodoItem('')
    }

    const deleteItem = (itemIndex) => {
        setTodoList(prev => {
            return prev.filter((item, index) => index !== itemIndex)
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form type="submit" onSubmit={(event)=>addItem(event)}>
            <input 
            type="text"
            value={todoItem}
            onChange={(event)=>setTodoItem(event.target.value)}
            />
            </form>
            <h2>Todos</h2>
                <ul>
                    {todoList.map((item, index) => {
                        return (
                        <li key={index} >{item} 
                         <button onClick={()=>deleteItem(index)}>done</button>
                        </li>
                        )
                    })}
                </ul>
        </div>
    )
}