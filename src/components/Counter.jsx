import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev -1);
    }

    return (
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} disabled={count===0}>Decrement</button>
        </div>
    )
}

export default Counter;