import React, {useContext} from 'react';
import ColorContext from '../context/ColorContext';


function About() {
    const [color, SetColor] = useContext(ColorContext)

    return(
        <div>
            <h2 style ={{color: color}}>Welcome to React UseContext Color Picker Web</h2>

            <button onClick={() => SetColor("red")}>Red</button>
            <button onClick={() => SetColor("green")}>Green</button>
            <button onClick={() => SetColor("blue")}>Blue</button>

        </div>
    )
}

export default About;