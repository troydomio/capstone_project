import '../App.css'

const onClick = (e) => {
    e.preventDefault();
    console.log("hi")
}

const Login = () => {
    return (
        <div className="login">
          <form>
            <input className="login" type="text"/>
            <input className="login" type="password"/>
            <input className="login" type="submit" value="Login" onClick={onClick}/>
            <input className="login" type="submit" value="Sign Up"/>
          </form>
        </div>
    )
}

export default Login
