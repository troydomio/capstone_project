import React, { useState } from "react";
import '../App.css';
import Login from '../Login';
import NavBar from '../Navbar';
import Main from '../ImageContainer';

function App() {
  



  return (


    <>
      <div> "hi" 

      <NavBar/>
      <Login/>
      </div>
      {/* <NavBar user={user} setUser={setUser} /> */}
      {/* <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main> */}
    </>
  );
}

export default App;