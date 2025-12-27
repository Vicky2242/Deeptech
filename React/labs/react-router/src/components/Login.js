import React from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleLogin = () =>{
    const isLoginSuccess = true;

    if(isLoginSuccess){
      navigate('/dashboard', {replace: true});
    };
  }

  return(
    <div>
      <h2>Please login to continue</h2>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
  
  
}

export default Login;
