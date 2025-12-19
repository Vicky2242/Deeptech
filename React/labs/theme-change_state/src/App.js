import React from 'react'
import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home';

function App() {

  const [theme, setTheme] =useState("light");

  const ToggleTheme = () =>{
    setTheme(theme==="light"? "dark" :  "light")
  };



  return (

    <ThemeContext.Provider  value ={{theme,ToggleTheme}}>
    <div className={theme === "light" ? "light-theme" : "dark-theme"} >
      <Home />
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App