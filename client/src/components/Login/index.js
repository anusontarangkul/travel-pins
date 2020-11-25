
import react, {useState} from "react";
import API from "../../utils/API";
import './style.css';

//login 
function Login (){

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
        .catch(err => {console.log(err)});
    }
    const handleSignup = (event) => {
        event.preventDefault();
        //console.log(signupState);
        API.userSignup(signupState)
            .then(res => {
                console.log("sign up success");
                window.location.href = "/login";
            })
            .catch(err => { console.log(err) });

    }
    const handleLoginChange = (event) =>{
        setLogin({...loginState, [event.target.name]: event.target.value})
    }
    const handleSignupChange = (event) => {
        setSignupState({ ...signupState, [event.target.name]: event.target.value })
    }

    return (

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
                    <form className = "inputSize">
                        <h5>firstname</h5>
                        <input id="firstname" name="firstName" autocomplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <h5>last name</h5>
                        <input id="lastname" name="lastName" autocomplete="off" className="input" type="text"  onChange={(e) => handleSignupChange(e)}/>
                        <h5>username</h5>
                        <input id="username" name="username" autocomplete="off" class="input" type="text" onChange={(e) => handleSignupChange(e)}/>
                        <h5>email</h5>
                        <input id="email" name="email" autocomplete="off" className="input" type="text" onChange={(e) => handleSignupChange(e)} />
                        <h5>password</h5>
                        <input id="password" name="password" autocomplete="off" class="input" type="password" onChange={(e) => handleSignupChange(e)}/>
                        <button type="button" onClick={handleSignup}>Signup</button>
                    </form>
                </div>
            </div>



            <div className="loginC container">
            <div className="loginCard animatedS animatedFadeInUp fadeInUp">
                <h1 id="loginTitle">LOGIN</h1>
                <form>
                    <h5>username</h5>
                    <input id="username" name="username" autocomplete="off" class="input" type="text" onChange={(e) => handleLoginChange(e)}></input>
                    <h5>password</h5>
                    <input id="password" name="password" autocomplete="off" class="input" type="password" onChange={(e) => handleLoginChange(e)}/>
                    <button type="button" onClick={handleLogin}>login</button>
                </form>
            </div>
            </div>
            
        </div>

    )
}

export default Login;