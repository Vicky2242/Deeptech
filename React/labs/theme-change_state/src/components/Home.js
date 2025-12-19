import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


function Home() {
  const {theme, ToggleTheme} =useContext(ThemeContext);

  const styles = {
    container:{
      padding :"20px",
      textAlign:"center",
      backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
      color: theme === "light" ? '#000' : '#fff',
    },

    button:{
      padding:"10px20px",
      backgroundColor: theme === "light" ? "#000": "#fff",
      color: theme==="light" ? "#fff" : "#000"
    },
  };

  return (
    <div style={styles.container}>
      <h3>Welcome to the website</h3>
      <p>Current Theme: {theme}</p>

      <button style={styles.button} onClick={ToggleTheme}>
        Switch theme
      </button>
      
    </div>
  );
}

export default Home;