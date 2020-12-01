import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Landing from './components/Landing';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Upload from "./components/Upload";
import Popup from './components/Popup';
import Stats from './components/Stats';
import API from "./utils/API"
import { useSpring, animated, useTransition } from 'react-spring';


function App() {
  const [country, setCountry] = useState();
  const [popupState, setPopup] = useState(false);
  const [uploadState, setUploadState] = useState(false);
  const [countryState, setCountryState] = useState("");
  const [FollowerState, setFollowerState] = useState([])
  const [user, setUser] = useState();
  const [followingVisited, setFollowingVisited] = useState([]);
  console.log(countryState)
  //react spring animations
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: `translate3d(0,100px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0,100px,0)` },
    config: { duration: 280 }
  })


  return (
    <div className="App">

      <Router>
        <Wrapper>

          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Stats />
            <Navbar />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/map">

            <Map setCountry={setCountry} setPopup={setPopup} setUploadState={setUploadState} setCountryState={setCountryState} set={set} />
          <Popup transitions={transitions} set={set} country={country} setUploadState={setUploadState} countryState={countryState}/>
            {uploadState && (<Upload country={countryState} />)}
            <Navbar />
          </Route>
          <Route exact path="/home">
            <Home />

          </Route>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;


/*<Map setUploadState = {setUploadState} setCountryState = {setCountryState}/>
{uploadState && (<Upload country = {countryState}/>)}*/