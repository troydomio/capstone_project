import { useState } from "react";
import '../App.css'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "../media/Login.css";

function Login({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);

    return (
      <div  className="landingcontainer">
      <div className="logincontainer">
         <div className="login">
         <div className="logintextlogo"><p>Hobbygram</p></div>
      {showLogin ? (
        <>
      <LoginForm onLogin={onLogin} />
      <div className="login">
      Don't have an account? <button className="login" onClick={()=> setShowLogin(false)}>Sign up</button>
      </div>
      </>
      ) : (
        <>
        <SignUpForm onLogin={onLogin} />
        <br />
        Already have an account? <button onClick={()=> setShowLogin(true)}>Log in</button>
        </>
      )}
    </div>
        </div>
        </div>
    )
}

export default Login;
