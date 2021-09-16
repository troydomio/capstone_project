import "../App.css";
import Bio from "./Bio";
import { GrPower } from "react-icons/gr";
import { useState } from "react";

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

  //  if (response.ok) {
     
  //  } else {
      
   // }
 // };


  return (
    <div className="navbar">
      <div className="out">
        <a href="/">
          <p className="logotext">Potatogram</p>
        </a>
        <p className="welcomename">Welcome {user.username}!</p>
        <p onClick={handleClick}>
          Logout <GrPower />
        </p>
        <button >delete account</button>
      </div>
    </div>
  );
};

export default NavBar;
