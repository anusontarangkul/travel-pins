import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Map from './components/Map';

import Landing from './components/Landing';

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Popup from './components/Popup';


function App() {
  const [country, setCountry] = useState();
  const [popupState, setPopup] = useState(false);
  return (
    <div className="App">


      <Router>
        <Wrapper>

          <Route exact path = "/">
            <Landing/>
          </Route>
            <Route exact path = "/login">
              <Login/>
            </Route>

            <Route exact path = "/signup">
              <Signup/>
            </Route>
          <Route exact path = "/map">
            <Map setCountry={setCountry} setPopup={setPopup}/>
            {popupState && (<Popup country={country}/>)}
            <Navbar/>
          </Route>
        </Wrapper>
      </Router>


    </div>
  );
}

export default App;
