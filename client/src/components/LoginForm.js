import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
<div className="login">
<form>
            <input className="login" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="login" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="login" type="submit" value="Login" onClick={handleSubmit}/>
          </form>
        </div>

        /* <FormField>
          <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField> */
    );
  }
  
  export default LoginForm;