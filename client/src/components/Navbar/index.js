import react from 'react';
import './style.css';
import { IconContext } from "react-icons";
import { MdHome } from "react-icons/md";

function Navbar(){
    return <div className="navbar">
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <div className="nav-item">
                <MdHome />
            </div>
        </IconContext.Provider>
            <div className="nav-item">Map</div>
            <div className="nav-item">Profile</div>
            <div className="nav-item">Profile</div>
    </div> ;

}

export default Navbar;