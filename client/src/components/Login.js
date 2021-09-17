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
         <div className="logintextlogo"><p>Potatogram</p></div>
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

{/* <div className="logincontainer">
        <div className="login">
          <div className="logintextlogo"><p>Potatogram</p></div>
        {activeForm === "login"? <Signup onLogin={onLogin}/> : <Login onLogin={onLogin}/> }
         <p onClick={()=>setActiveForm("login")}>Dont have an account? Sign up</p> 
         <p onClick={()=>setActiveForm("")}>Have an account? Login</p> 
        </div>
        </div>
    </div> */}
    </div>
        </div>
        </div>
    )
}

export default Login;
