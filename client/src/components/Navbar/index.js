import react from 'react';
import './style.css';
import { MdHome } from "react-icons/md";
import { FiMapPin, FiHome, FiUser, FiMenu  } from "react-icons/fi";
import API from "../../utils/API";

function handleLogout(event){
    event.preventDefault();
    console.log("clicked in function");
    API.logout()
    .then( res=>{
        //console.log(res);
        window.location.href = "/"
    })
    .catch(err =>{console.log(err)});
}

function Navbar(){
    return <div className="navbar">
            <div className="nav-item">
                <i><FiHome/></i>
            </div>
            <div className="nav-item">
                <i><FiMapPin/></i>
            </div>
            <div className="nav-item">
                <i><FiUser/></i>
            </div>
            <div className="nav-item" >
                <button onClick = {e => handleLogout(e)}><i ><FiMenu/></i></button>
            </div>
    </div> ;

}

export default Navbar;