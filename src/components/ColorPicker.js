import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export const ColorPicker = () => {
    const [color, setColor] = useState('white')
    const backColor = {backgroundColor: color};
    const colorNames = ['Red', 'Yellow', 'Green', 'Blue', 'Orange']
    return (
        <div style={backColor}>
            <h1>The current color is {color} </h1>
            {colorNames.map(colorName=>( //use the array method map to reduce code
                <button 
                    onClick={()=>setColor(colorName)}
                    key={colorName}
                >
                    {colorName}
                </button>
            ))}

            {/* <button onClick={()=>setColor('Red')}>
                Red
            </button>
            <button onClick={()=>setColor('Yellow')}>
                Yellow
            </button>
            <button onClick={()=>setColor('Green')}>
                Green
            </button>
            <button onClick={()=>setColor('Blue')}>
                Blue
            </button> */}

        </div>
    )
}