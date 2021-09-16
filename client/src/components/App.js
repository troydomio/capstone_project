import "../App.css";
import NavBar from "./Navbar";
import Main from "./ImageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { useState, useEffect } from "react";
import Bio from './Bio';

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:4000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LandingPage onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Bio user={user} setUser={setUser}></Bio>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
