import React from "react";
import "./style.css";

function Landing(props) {
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
      <div className="sphereContainer">
        <div className="sphere">
          {/* <div id="line1" />
          <div id="line2" />
          <div id="line3" />
          <div id="line4" /> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
