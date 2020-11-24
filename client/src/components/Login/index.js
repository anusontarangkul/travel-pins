import react, {useState , useRef} from "react";
import API from "../../utils/API";


function Login (){

    const [loginState, setLogin] = useState({});
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(userRef.current.value);
        console.log(passRef.current.value);
    }

    return (
        <form>
            <h2>login</h2>
            <h5>username</h5>
            <input id="username" name="username" autocomplete="off" className="input" type="text" ref = {userRef}></input>
            <h5>password</h5>
            <input id="password" name="password" autocomplete="off" className="input" type="password" ref = {passRef}/>
            <button type="button" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;