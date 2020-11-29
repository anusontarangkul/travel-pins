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
                <i className="material-icons material-icons-outlined" id="homeButton">
                home
                </i>
            </div>
            <div className="nav-item">
                <i className="material-icons material-icons-outlined" id="mapButton">
                room
                </i>
            </div>
            <div className="nav-item">
                <i className="material-icons material-icons-outlined" id="userButton">
                person_outline
                </i>
            </div>
            <div className="nav-item" >
                <a onClick={handleLogout}>
                    <i className="material-icons material-icons-outlined" id="menuButton">
                    menu
                    </i>
                </a>
            </div>
    </div> ;

}

export default Navbar;