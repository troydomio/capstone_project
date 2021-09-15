import React, { useEffect, useState } from "react";
import '../App.css';
import Login from './Login';
import NavBar from './Navbar';
import Main from './ImageContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
         <Router>
            <Switch>
              {/* <Route path="/signup">
              <Signup/>
              </Route> */}
              <Route path="/">
              <Main/>
              </Route>
              <Route path="/dashboard">
                 {/* <Main/> */}
              </Route>
            </Switch>
         </Router>
     
      
    </div>
  );
}

export default App;