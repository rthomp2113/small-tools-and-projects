import React, { useState } from 'react';
import { ListManager } from './ListManager';

export const TodoEditor = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoItem, setTodoItem] = useState('');
    const [fromPosition, setFromPosition] = useState('Top');

    const addItem = (event) => {
        event.preventDefault(); //prevents submission from restarting page
        if(todoItem) { //wont submit with no text in input field
            if(fromPosition === "Top"){
                setTodoList(prev => [todoItem, ...prev])
                setTodoItem('')
            } else if (fromPosition === "Bottom"){
                setTodoList(prev => [...prev, todoItem])
                setTodoItem('')
            }
        }
    }

    const deleteItem = (itemIndex) => {
        setTodoList(prev => {
            return prev.filter((item, index) => index !== itemIndex)
        })
    }

    //CONTAINS GREAT EXAMPLE OF LIFTING STATE UP!!!
    return (
        <div> 
            <h1>Todo List</h1>
            <ListManager setFromPosition={setFromPosition}/> 
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