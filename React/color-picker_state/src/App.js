import { useState } from 'react';
import About from './components/About';
import ColorContext from './context/ColorContext';


function App(){
  const[color, SetColor] =  useState("black");

  return(

    <ColorContext.Provider value = {[color, SetColor]}>
      <About />
    </ColorContext.Provider>
  );
}

export default App;