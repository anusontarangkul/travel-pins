
import react, { useState } from "react";
import API from "../../utils/API";
import './style.css';

//login 
function Login() {

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
            .catch(err => { console.log(err) });
    }
    const handleChange = (event) => {
        setLogin({ ...loginState, [event.target.name]: event.target.value })
    }

    return (
<<<<<<< HEAD
        <form>
            <h2>login</h2>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}></input>
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" className="input" type="password" onChange={(e) => handleChange(e)} />
            <button type="button" onClick={handleLogin}>Login</button>
        </form>
=======

        <div className="login">
            <div className="logoHeader">
                <div className="container">
                    <h1 className="title">travel pins</h1>
                </div>
                <div className="mainSub">
                    <h2 className="subhead">Sharing the world.</h2>
                </div>
            </div>
            <div className="signupC container">
                <div className="signupCard animated animatedFadeInUp fadeInUp">
                    <h1 id="signupTitle">Signup</h1>
                    <form>
                        <h5>username</h5>
                        <input id="username" name="username" autocomplete="off" class="input" type="text" ></input>
                        <h5>password</h5>
                        <input id="password" name="password" autocomplete="off" class="input" type="password"/>
                    </form>
                </div>
            </div>



            <div className="loginC container">
            <div className="loginCard animatedS animatedFadeInUp fadeInUp">
                <h1 id="loginTitle">LOGIN</h1>
                <form>
                    <h5>username</h5>
                    <input id="username" name="username" autocomplete="off" class="input" type="text" ></input>
                    <h5>password</h5>
                    <input id="password" name="password" autocomplete="off" class="input" type="password"/>
                </form>
            </div>
            </div>
            
        </div>

>>>>>>> main
    )
}

export default Login;