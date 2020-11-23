import react from 'react';
import './style.css';
import { MdHome } from "react-icons/md";
import { FiMapPin, FiHome, FiUser, FiMenu  } from "react-icons/fi";


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
            <div className="nav-item">
                <i><FiMenu/></i>
            </div>
    </div> ;

}

export default Navbar;