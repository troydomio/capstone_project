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

  //const handleDelete = async (e) => {
   // const response = await fetch("/users", {
 //     method: "DELETE",
    //  headers: {
    //    "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify({
    //    username: username,
    //    password: password,
     //   password_confirmation: passwordConfirmation,
    //  }),
  //  })
 //   const data = await response.json();

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
