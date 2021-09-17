import Bio from "./Bio";
import { GrPower } from "react-icons/gr";
import { useState } from "react";
import "../NavBar.css"

const NavBar = ({ user, setUser }) => {
  const [isCreated, setIsCreated] = useState(false)
  const [deleteClicked, setDeleteClicked] = useState(false)
  const handleClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  const NavBar = ({ user, setUser }) => {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
      <div className="navbar">
        <a href="/"><p className="logotext">Potatogram</p></a>

        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="navbar">
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

    </div>
  );
};

export default NavBar;
