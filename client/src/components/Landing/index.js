import React, {useState} from "react";
import { CSSTransition } from 'react-transition-group';
import "./style.css";

function Landing(props) {

  const [showContainer, setShowContainer] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

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
      {/* {showContainer && (
        
        <div className="sphereContainer">
          <div className="sphere" onClick={() => setShowLogin(true)}>
            <div id="line1" />
            <div id="line2" />
            <div id="line3" />
            <div id="line4" />
          </div>
        </div>
      )}<CSSTransition
      in={showLogin}
      
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEnter={() => setShowContainer(false)}
      onExited={() => setShowContainer(true)}
    >
      <button onClick={() => setShowLogin(false)}>
            Close
          </button>
    </CSSTransition> */}
    <div className="container">
      <button id="getStarted">
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
