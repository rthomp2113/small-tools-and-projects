import React, { useState } from 'react';

export const GroceryPicker = ({groceryList}) => {
    const [list, setList] = useState([]);
    const addItem = (item) => {
        setList((prev) => [item, ...prev])
    }

    const removeItem = (itemIndex) => {
        setList((prev) => prev.filter((item, index) => index !== itemIndex) )

    }

    return (
        <div>
            <h1>Grocery List</h1>
            <ul>
               {list.map((item, index) => {
                   return <li onClick={() => removeItem(index)} key={index}>{item}</li>
               })}
            </ul>
            <h1>Items to Add</h1>
            {groceryList.map((item) => {
               return (
                <button 
                    onClick={() => addItem(item)} 
                    key={item}
                >
                        {item}
                </button>
                )
            })}
        </div>
    )
}