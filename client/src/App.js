import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>

          <Route exact path = "/">
            <Home></Home>
          </Route>

          <Route exact path = "/login">
            <Login></Login>
          </Route>

          <Route exact path = "/signup">
            <Signup></Signup>
          </Route>

          <Route exact path = "/map">
            <Map/>
            <Navbar/>
          </Route>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;