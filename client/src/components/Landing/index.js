import React from "react";
import "./style.css";

function Landing(props) {
  return (
    <div className="landing" {...props}>
      <div className="mainHeader">
        <h1 className="title">travel pins</h1>
        <h1 className="space"></h1>
      </div>
      {/* <div className="iconContainer">
        <i className="material-icons material-icons-outlined" id="pinButton">
          room
        </i>
      </div> */}
      <div className="sphere">
        <div id="line1" />
        <div id="line2" />
        <div id="line3" />
        <div id="line4" />
      </div>
    </div>
  );
}

export default Landing;
