import react from 'react';
import './style.css';
import { MdHome } from "react-icons/md";
import { FiMapPin, FiHome, FiUser, FiMenu  } from "react-icons/fi";

function Navbar(){
    return <div className="navbar">
            <div className="nav-item">
                <FiHome />
            </div>
            <div className="nav-item">
                <FiMapPin/>
            </div>
            <div className="nav-item">
                <FiUser/>
            </div>
            <div className="nav-item">
                <FiMenu/>
            </div>
    </div> ;

}

export default Navbar;