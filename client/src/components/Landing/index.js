import React from "react";
import "./style.css";

function Landing(props) {
    return <div className="landing" {...props}>
      <div className="mainHeader">
        <h1 className="title">travel pins</h1>
        <h1 className="space"></h1>
      </div>
      <button className="begin">Start</button>
    </div>;
  }
  
  export default Landing;