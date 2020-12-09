import React, {useState} from "react";
import { useSpring, animated} from 'react-spring';
import "./style.css";

function Landing(props) {


  // const [showContainer, setShowContainer] = useState(true);
  // const [showLogin, setShowLogin] = useState(false);
  
  const handleClick = () => {
    window.location.href = "/login";
  }

  return (
    <div className="landing" {...props}>
      <div className="mainHeader">
        <h1 className="title">travel pins</h1>
        <h2 className="space"></h2>
        
      </div>
      <div className="mainSub">
        <h2 className="subhead">Sharing the world.</h2>
        <h2 className="space"></h2>
      </div>
      <i className="material-icons material-icons-outlined" id="pinButton">
          room
        </i>

    <div className="buttonContainer">
      <button id="getStarted" onClick={handleClick}>

        <i class="material-icons" id="globe">
        done
        </i>
        <h2 class="button-text">GET STARTED</h2>
      </button>
    </div>
    </div>
  );
}

export default Landing;
