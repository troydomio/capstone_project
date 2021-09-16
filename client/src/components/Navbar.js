import '../App.css'


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

export default NavBar