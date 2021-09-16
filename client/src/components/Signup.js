import "../App.css";
import { useState } from "react";

const Signup = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
    const data = await response.json();

    if (response.ok) {
      onLogin(data);
    } else {
      setErrors(data.errors)
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input className="login" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <input className="login" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <input
          className="login"
          type="password"
          placeholder="password confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <input className="login" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
