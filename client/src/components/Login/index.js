import react from "react";
import './style.css';

function Login (){
    return (
        <div className="login">
            <div className="logoHeader">
                <div className="mainHeader">
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
    )
}

export default Login;