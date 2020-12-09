import react from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";

function handleLogout(event) {
  event.preventDefault();
  console.log("clicked in function");
  API.logout()
    .then((res) => {
      //console.log(res);
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item">
        <NavLink
          exact
          to="/home"
          className="material-icons navicon"
          activeClassName="material-icons navicon material-icons-outlined"
          id="homeButton"
        >
          home 
        </NavLink>
      </div>
      <div className="nav-item">
          <NavLink
          exact
          to="/map"
          className="material-icons navicon"
          activeClassName="material-icons navicon material-icons-outlined" id="mapButton">
            room
          </NavLink>
      </div>
      <div className="nav-item">
          <NavLink
          exact
          to="/profile"
          className="material-icons navicon"
          activeClassName="material-icons navicon material-icons-outlined" id="userButton">
            person
          </NavLink>
      </div>
      <div className="nav-item">
        <a onClick={handleLogout}>
          <NavLink
          exact
          to="/home"
          className="material-icons navicon"
          activeClassName="material-icons navicon material-icons-outlined" id="logoutButton">
            clear
          </NavLink>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
