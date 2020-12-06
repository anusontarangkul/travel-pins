import react from 'react';
import './style.css';
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
                <a href = "/home">
                    <i className="material-icons navicon" id="homeButton">
                    home
                    </i>
                </a>
            </div>
            <div className="nav-item">
            <a href = "/map">
                <i className="material-icons navicon" id="mapButton">
                room
                </i>
            </a>
            </div>
            <div className="nav-item">
                <a href = "/profile">
                    <i className="material-icons navicon" id="userButton">
                    person
                    </i>
                </a>
            </div>
            <div className="nav-item" >
                <a onClick={handleLogout}>
                    <i className="material-icons navicon" id="menuButton">
                    clear
                    </i>
                </a>
            </div>
    </div> ;

}

export default Navbar;