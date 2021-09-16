import '../App.css';
import Login from './Login';
import NavBar from './Navbar';
import Main from './ImageContainer';
import UserProfile from './UserProfile';
import Bio from './Bio';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react"

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

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
        <Bio user={user} setUser={setUser}></Bio>
         <Router>
            <Switch>
              <Route exact path="/">
              <Main/>
              </Route>
              <Route path="/dashboard">
              <UserProfile />
              </Route>
            </Switch>
         </Router>
     
      
    </div>
  );
}

export default App;
