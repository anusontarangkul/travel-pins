import react, {useState} from "react";
import API from "../../utils/API";

function Signup (){

    const [signupState, setSignupState] = useState({
        firstName:"",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    const handleSignup = (event) =>{
        event.preventDefault();
        //console.log(signupState);
        API.userSignup(signupState)
        .then(res => {
            console.log("sign up success");
            window.location.href = "/map";
        })
        .catch(err => {console.log(err)});

    }
    const handleChange = (event) =>{
        setSignupState({...signupState, [event.target.name]: event.target.value})
    }
    return (
        <form >
            <h2>Signup</h2>
            <h5>firstname</h5>
            <input id="firstname" name="firstname" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}/>
            <h5>last name</h5>
            <input id="lastname" name="lastname" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}/>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}/>
            <h5>email</h5>
            <input id="email" name="email" autocomplete="off" className="input" type="text" onChange={(e) => handleChange(e)}/>
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" className="input" type="password" onChange={(e) => handleChange(e)}/>
            <button type="button" onClick={handleSignup}>Signup</button>
        </form>
    )
}

export default Signup;