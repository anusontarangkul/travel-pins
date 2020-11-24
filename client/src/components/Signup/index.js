import react from "react";

function Signup (){
    return (
        <form >
            <h2>Signup</h2>
            <h5>firstname</h5>
            <input id="firstname" name="firstname" autocomplete="off" className="input" type="text" />
            <h5>last name</h5>
            <input id="lastname" name="lastname" autocomplete="off" className="input" type="password"/>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" className="input" type="text" />
            <h5>email</h5>
            <input id="email" name="email" autocomplete="off" className="input" type="text" />
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" className="input" type="password"/>
        </form>
    )
}

export default Signup;