import react from "react";
import './style.css';

function Login (){
    return (
        <form>
            <h2>login</h2>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" class="input" type="text" ></input>
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" class="input" type="password"/>
        </form>
    )
}

export default Login;