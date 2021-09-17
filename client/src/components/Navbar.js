import Bio from "./Bio";
import { GrPower } from "react-icons/gr";
import { useState } from "react";
import "../NavBar.css"
import "../App.css";

const NavBar = ({ user, setUser }) => {
  const handleClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    // return (
    //   <div className="navbar">
    //     <a href="/"><p className="logotext">Potatogram</p></a>

    //     <button variant="outline" onClick={handleLogoutClick}>
    //       Logout
    //     </button>
    //   </div>
    // )
  

  return (
<>
    <div className="navbar">
      <div className='item1'>
        <a href="/">
          <p className="logotext">Potatogram</p>
        </a>
      </div>
      <div className='navend'>
        <div className='navendItem'>
          <p>Welcome {user.username}!</p>
          <a href="/dashboard"><button>  bio </button></a>
        </div>
        <div className='navendItem'>
          <p onClick={handleLogoutClick}>
            Logout <GrPower />
          </p>
        </div>
        <div className='navendItem'>
          
        </div>
      </div>

    </div>
    </>
  );
};

export default NavBar;
