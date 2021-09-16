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


  //  if (response.ok) {
     
  //  } else {
      
   // }
 // };


  return (
<>
    <div className="navbar">
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
      
    </div>
    </>
  );
};

export default NavBar;
