
import react, {useState} from "react";
import API from "../../utils/API";
import './style.css';

//login 
function Login (){

    const [loginState, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleLogin = (event) => {
        event.preventDefault();
        API.login(loginState)
        .then(res => {
            console.log("login success");
            window.location.href = "/map";
        })
        .catch(err => {console.log(err)});
    }
    const handleChange = (event) =>{
        setLogin({...loginState, [event.target.name]: event.target.value})
    }

    return (
        <form>
            <h2>login</h2>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}></input>
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" className="input" type="password" onChange={(e) => handleChange(e)}/>
            <button type="button" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;