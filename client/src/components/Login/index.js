import react, { useState } from "react";
import API from "../../utils/API";
import IndicatorDots from "../Popup/indicatordots";
import Carousel from "re-carousel";
import './style.css';

//login 
function Login() {

    const [loginState, setLogin] = useState({
        username: "",
        password: ""
    });
    const [signupState, setSignupState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
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
    const handleSignup = (event) => {
        event.preventDefault();
        //console.log(signupState);
        // API.userSignup(JSON.stringify({ signupState }))
        API.userSignup(signupState)
            .then(res => {
                console.log("sign up success");
                window.location.href = "/login";
                alert("Account successfully created! Please login.")
            })
            .catch(err => { console.log(err) });

    }
    const handleLoginChange = (event) => {
        setLogin({ ...loginState, [event.target.name]: event.target.value })
    }
    const handleSignupChange = (event) => {
        setSignupState({ ...signupState, [event.target.name]: event.target.value })
    }

    return (

        <div id="login">
            {/* <div className="logoHeader">
                <div className="container">
                    <h1 className="title">travel pins</h1>
                </div>
                <div className="mainSub">
                    <h2 className="subhead">Sharing the world.</h2>
                </div>
            </div> */}
                <div className="background">
      <div className="mainHeader">
        <h1 className="title">travel pins</h1>
        <h2 className="space"></h2>
        
      </div>
      <div className="mainSub">
        <h2 className="subhead">Sharing the world.</h2>
        <h2 className="space fadeOut"></h2>
      </div>
      <i className="material-icons material-icons-outlined slide" id="pinButton">
          room
        </i>
        <div className="buttonContainer fadeOut">
      <button id="hoveredBtn">

        <i class="material-icons" id="globe">
        done
        </i>
        <h2 class="button-text">GET STARTED</h2>
      </button>
    </div>
        </div>

            <Carousel>
            <div className="loginC container animated animatedFadeInUp fadeInUp">
                <div className="loginCard">
                <h1 className="formTitle" >Sign In</h1>
                <p className="swipetoSign">If you do not already have an account, Swipe Left to sign up.</p>
                    <form className="form">
                        <input placeholder="Username" id="username-login" name="username" autoComplete="off" className="input" type="text" onChange={(e) => handleLoginChange(e)} />
                        <input placeholder="Password" id="password-login" name="password" autoComplete="off" className="input" type="text" onChange={(e) => handleLoginChange(e)} />
                        <div className="container">
                            <button type="button" class="submit-btn" onClick={handleLogin}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="signupC container animated animatedFadeInUp fadeInUp">
                <div className="signupCard">
                    <h1 className="formTitle">Sign Up</h1>
                    <form className="form">
                        <input placeholder="First Name" id="firstName" name="firstName" autoComplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <input placeholder="Last Name" id="lastName" name="lastName" autoComplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <input placeholder="Username" id="username" name="username" autoComplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <input placeholder="Email" id="email" name="email" autoComplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <input placeholder="Password" id="password" name="password" autoComplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <div className="container">
                            <button class="signSubmit-btn" type="button" onClick={handleSignup}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            </Carousel>
        </div>

    )
}

export default Login;