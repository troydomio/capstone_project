<<<<<<< HEAD
import Bio from "./Bio";
import { GrPower } from "react-icons/gr";
import { useState } from "react";
import "../NavBar.css"
=======
import "../App.css";
>>>>>>> fa51333d8d871710d6161f4d6341c9380fe75ef5

const NavBar = ({ user, setUser }) => {
  const handleClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

<<<<<<< HEAD
  const NavBar = ({ user, setUser }) => {

=======
>>>>>>> fa51333d8d871710d6161f4d6341c9380fe75ef5
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

<<<<<<< HEAD
    return (
      <div className="navbar">
        <a href="/"><p className="logotext">Potatogram</p></a>

        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    )
  }
=======

  //  if (response.ok) {
     
  //  } else {
      
   // }
 // };

>>>>>>> fa51333d8d871710d6161f4d6341c9380fe75ef5

  return (
<>
    <div className="navbar">
<<<<<<< HEAD
      <div className='item1'>
        <a href="/">
          <p className="logotext">Potatogram</p>
        </a>
      </div>
      <div className='navend'>
        <div className='navendItem'>
          <p className="">Welcome {user.username}!</p>
        </div>
        <div className='navendItem'>
          <p onClick={handleClick}>
            Logout <GrPower />
          </p>
        </div>
        <div className='navendItem'>
          
        </div>
      </div>

=======
      {/* <div className="out"> */}
        <a href="/">
          <p className="logotext">Potatogram</p>
        </a>
        <p className="welcomename">Welcome {user.username}!</p>
        <p onClick={handleClick}>
        </p>
        <a href="/dashboard"><button>  bio </button></a>
        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      
>>>>>>> fa51333d8d871710d6161f4d6341c9380fe75ef5
    </div>
    </>
  );
};

export default NavBar;
