import React from "react";
import $ from "jquery"
import { findDOMNode } from "react-dom";
import "./style.css";

function Landing(props) {


  // const displayNone = useRef(null);

  // const handleClick = () => {
  //   const fadeOut = findDOMNode(displayNone)
  //   $(fadeOut).fadeOut();
  // }




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
